import Reflux from 'reflux';
import * as _  from 'lodash';
import AdminAction from './admin-action';

const defaultState = {
  id:          null,
  question:    '',
  rawQuestion: '',
  answer:      '',
  category:    1,
};

export default class AdminStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      editingQuiz: defaultState,
      quizList: []
    };
    this.listenables = AdminAction;
  }

  onGetallCompleted(res) {
    this.setState({ quizList : res.result });
  }

  onNewQuiz() {
    this.setState({editingQuiz: defaultState});
  }

  onEditQuiz(id) {
    const target = _.find(this.state.quizList, (quiz) => {
      return quiz.id === id
    });
    const newQuiz = _.assign({}, this.state.editingQuiz, target);
    this.setState({editingQuiz: newQuiz});
  }

  onCreateCompleted(res, data) {
    data.id = res.id;
    const newList = _.assign([], this.state.quizList, data);
    this.setState({ quizList : newList });
  }

  onUpdateCompleted(res, data) {
    const newList = _.assign([], this.state.quizList, data);
    this.setState({ quizList : newList });
  }

  onDeleteCompleted(res, id) {
    const newList = _.filter(this.state.quizList, (quiz) => {
      return quiz.id !== id;
    });
    this.setState({ quizList : newList });
  }
}
