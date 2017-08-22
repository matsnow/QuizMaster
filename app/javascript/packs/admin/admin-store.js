import Reflux from 'reflux';
import * as _  from 'lodash';
import RichTextEditor from 'react-rte';
import AdminAction from './admin-action';

const defaultState = {
  id:           undefined,
  question:     '',
  answer:       '',
  category:     1,
};

export default class AdminStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      editingQuiz: Object.assign({}, defaultState),
      editorString: RichTextEditor.createEmptyValue(),
      quizList: []
    };
    this.listenables = AdminAction;
  }

  onGetallCompleted(res) {
    this.setState({ quizList : res.result });
  }

  onNewQuiz() {
    this.setState({
      editingQuiz: Object.assign({}, defaultState),
      editorString: RichTextEditor.createEmptyValue(),
    });
  }

  onEditQuiz(id) {
    const target = _.find(this.state.quizList, (quiz) => {
      return quiz.id === id
    });
    const newQuiz = Object.assign({}, this.state.editingQuiz, target);
    this.setState({
      editingQuiz: newQuiz,
      editorString: RichTextEditor.createValueFromString(newQuiz.question, 'html')
    });
  }

  onCreateCompleted(res, data) {
    data.id = res.id;
    const newList = this.state.quizList.concat(data);
    this.setState({ quizList : newList, editingQuiz: data});
  }

  onUpdateCompleted(res, data) {
    const newList = this.state.quizList.map((quiz) => {
      return (quiz.id === data.id) ? Object.assign({}, quiz, data) : quiz;
    });
    this.setState({ quizList : newList });
  }

  onDeleteCompleted(res, id) {
    const newList = _.filter(this.state.quizList, (quiz) => {
      return quiz.id !== id;
    });
    this.setState({ quizList : newList });
  }

  onEditQuestion(value) {
    const newEditing = Object.assign(this.state.editingQuiz, { question: value.toString('html') });
    this.setState({
      editingQuiz: newEditing,
      editorString: value
    });
  }

  onEditAnswer(value) {
    const newEditing = Object.assign(this.state.editingQuiz, { answer: value });
    this.setState({ editingQuiz: newEditing });
  }

  onEditCategory(value) {
    const newEditing = Object.assign(this.state.editingQuiz, { category: value });
    this.setState({ editingQuiz: newEditing });
  }
}
