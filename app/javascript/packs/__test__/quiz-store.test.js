import QuizStore from '../question/quiz-store';

describe('QuizStore test', () => {
  let store;
  beforeEach(() => {
    store = new QuizStore();
  });

  describe('calls onChallengesCompleted', () => {
    it('then gets new values', () => {
      const res = {
        result: [
          [1, 'q1', 2],
          [2, 'q2', 4],
          [3, 'q3', 6],
        ]
      }
      const expectList = [
        {question_id: 1, question: 'q1', category: 2, answer: '', result: 'Unanswered'},
        {question_id: 2, question: 'q2', category: 4, answer: '', result: 'Unanswered'},
        {question_id: 3, question: 'q3', category: 6, answer: '', result: 'Unanswered'},
      ]

      store.onChallengesCompleted(res);
      const currentState = store.state;
      expect(currentState.challengeList).toEqual(expectList);
      expect(currentState.currentNo).toBe(0);
      expect(currentState.correctNum).toBe(0);
      expect(currentState.showDialog).toBe(false);
      expect(currentState.snackState).toEqual({showSnack: false});
    });
  });

  describe('calls onIsCorrectCompleted', () => {
    beforeEach(() => {
      store.setState({
        challengeList: [
          {question_id: 1, question: 'q1', category: 2, answer: '', result: 'Unanswered'},
          {question_id: 2, question: 'q2', category: 4, answer: '', result: 'Unanswered'},
          {question_id: 3, question: 'q3', category: 6, answer: '', result: 'Unanswered'},
        ],
        currentNo:  1,
        correctNum: 1,
        showDialog: false,
        snackState: {showSnack: false, isCorrect: false}
      });
    });

    it('with correct response and does not reach last number', () => {
      store.onIsCorrectCompleted({result: true});
      const currentState = store.state;

      expect(currentState.challengeList[1].result).toBe('Correct');
      expect(currentState.currentNo).toBe(2);
      expect(currentState.correctNum).toBe(2);
      expect(currentState.showDialog).toBe(false);
      expect(currentState.snackState).toEqual({showSnack: true, isCorrect: true});
    });

    it('with incorrect response and does not reach last number', () => {
      store.onIsCorrectCompleted({result: false});
      const currentState = store.state;

      expect(currentState.challengeList[1].result).toBe('Incorrect');
      expect(currentState.currentNo).toBe(2);
      expect(currentState.correctNum).toBe(1);
      expect(currentState.showDialog).toBe(false);
      expect(currentState.snackState).toEqual({showSnack: true, isCorrect: false});
    });

    it('reaches last number', () => {
      store.setState({ currentNo: 2 });
      store.onIsCorrectCompleted({result: true});
      const currentState = store.state;

      expect(currentState.challengeList[2].result).toBe('Correct');
      expect(currentState.currentNo).toBe(3);
      expect(currentState.correctNum).toBe(2);
      expect(currentState.showDialog).toBe(true);
      expect(currentState.snackState).toEqual({showSnack: false, isCorrect: false});
    });
  });

  describe('calls onEditingAnswer', () => {
    it('then gets changed value', () => {
      store.setState({
        challengeList: [{id: 1, answer: "before"}, {id: 2, answer: "before"}],
        currentNo: 1
      });
      store.onEditingAnswer("after");
      const currentState = store.state;
      expect(currentState.challengeList).toEqual(
        [{id: 1, answer: "before"}, {id: 2, answer: "after"}],
      );
    });
  });

  describe('calls onCloseSnack', () => {
    it('then gets changed state', () => {
      store.setState({
        snackState: {showSnack: true},
      });
      store.onCloseSnack();
      const currentState = store.state;
      expect(currentState.snackState.showSnack).toBe(false);
    });
  });
});
