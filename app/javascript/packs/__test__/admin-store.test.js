import AdminStore from '../admin/admin-store';
import RichTextEditor from 'react-rte';

describe('AdminStore test', () => {
  let store;
  beforeEach(() => {
    store = new AdminStore();
  });

  describe('calls onGetallCompleted', () => {
    it('then gets OK', () => {
      store.onGetallCompleted({result: "OK"});
      const currentState = store.state.quizList;
      expect(currentState).toBe("OK");
    });
  });

  describe('calls onNewQuiz', () => {
    it('then gets default values', () => {
      store.onNewQuiz();
      const currentState = store.state;
      expect(currentState.editingQuiz).toEqual({
        id:           undefined,
        question:     '',
        answer:       '',
        category:     1,
      });
      expect(currentState.editorString.toString('html')).toBe('<p><br></p>');
    });
  });

  describe('calls onEditQuiz', () => {
    it('then gets changed values', () => {
      store.setState({
        editingQuiz: {id: 1, question: "before"},
        quizList: [
         {id: 1, question: "before"},
         {id: 2, question: "after"},
        ]
      });
      const currentState = store.state;
      store.onEditQuiz(2);
      const afterState = store.state;
      expect(afterState.editingQuiz).toEqual({id: 2, question: "after"});
      expect(afterState.editorString.toString('html')).toBe('after');
    });

    it('with specified invalid index then gets no-changed values', () => {
      store.setState({
        editingQuiz: {id: 1, question: "before"},
        quizList: [
         {id: 1, question: "before"},
         {id: 2, question: "after"},
        ]
      });
      const currentState = store.state;
      store.onEditQuiz(3);
      const afterState = store.state;
      expect(afterState.editingQuiz).toEqual({id: 1, question: "before"});
      expect(afterState.editorString.toString('html')).toBe('before');
    });
  });

  describe('calls onCreateCompleted', () => {
    it('then gets new quizList', () => {
      store.setState({
        quizList: [
         {id: 1, question: "test"},
         {id: 2, question: "test2"},
        ]
      });
      store.onCreateCompleted({id: 3}, {question: "test3"});
      const currentState = store.state;
      expect(currentState.quizList[2]).toEqual({id: 3, question: "test3"});
    });
  });

  describe('calls onUpdateCompleted', () => {
    it('then gets changed quizList', () => {
      store.setState({
        quizList: [
         {id: 1, question: "test"},
         {id: 2, question: "test2"},
        ]
      });
      store.onUpdateCompleted(null, {id: 2, question: "test3"});
      const currentState = store.state;
      expect(currentState.quizList[1]).toEqual({id: 2, question: "test3"});
      expect(currentState.quizList.length).toBe(2);
    });

    it('with specified invalid index then gets no-changed quizList', () => {
      store.setState({
        quizList: [
         {id: 1, question: "test"},
         {id: 2, question: "test2"},
        ]
      });
      store.onUpdateCompleted(null, {id: 4, question: "test3"});
      const currentState = store.state;
      expect(currentState.quizList[1]).toEqual({id: 2, question: "test2"});
      expect(currentState.quizList.length).toBe(2);
    });
  });

  describe('calls onDeleteCompleted', () => {
    it('then deletes element in quizList', () => {
      store.setState({
        quizList: [
         {id: 1, question: "test"},
         {id: 2, question: "test2"},
        ]
      });
      store.onDeleteCompleted(null, 1);
      const currentState = store.state;
      expect(currentState.quizList[1]).toBeUndefined();
      expect(currentState.quizList.length).toBe(1);
    });

    it('with specified invalid index then does not delete element', () => {
      store.setState({
        quizList: [
         {id: 1, question: "test"},
         {id: 2, question: "test2"},
        ]
      });
      store.onDeleteCompleted(null, 4);
      const currentState = store.state;
      expect(currentState.quizList[1]).toEqual({id: 2, question: "test2"});
      expect(currentState.quizList.length).toBe(2);
    });
  });

  describe('calls onEditQuestion', () => {
    it('then gets changed values', () => {
      store.setState({
        editingQuiz: {id: 1, question: "before"},
        editorString: 'abcde'
      });
      const valueObj = { toString: () => 'OK'};
      store.onEditQuestion(valueObj);
      const currentState = store.state;
      expect(currentState.editingQuiz).toEqual({id: 1, question: "OK"});
      expect(currentState.editorString).toEqual(valueObj);
    });
  });

  describe('calls onEditAnswer', () => {
    it('then gets changed value', () => {
      store.setState({
        editingQuiz: {id: 1, answer: "before"},
      });
      store.onEditAnswer("after");
      const currentState = store.state;
      expect(currentState.editingQuiz).toEqual({id: 1, answer: "after"});
    });
  });

  describe('calls onEditCategory', () => {
    it('then gets changed value', () => {
      store.setState({
        editingQuiz: {id: 1, category: "before"},
      });
      store.onEditCategory("after");
      const currentState = store.state;
      expect(currentState.editingQuiz).toEqual({id: 1, category: "after"});
    });
  });
});
