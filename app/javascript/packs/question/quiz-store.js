import Reflux from 'reflux';
import * as _  from 'lodash';
import QuizAction from './quiz-action';

export default class QuizStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      challengeList: [],
      currentNo:  0,
      correctNum: 0,
      showDialog: false,
      snackState: {
        showSnack: false,
        isCorrect: false,
      }
    };
    this.listenables = QuizAction;
  }

  onChallengesCompleted(res) {
    const newList = res.result.map((quizArray) => {
      const quizObject = {
        question_id: quizArray[0],
        question:    quizArray[1],
        category:    quizArray[2],
        answer:      '',
        result:      'Unanswered',
      }
      return quizObject;
    });
    this.setState({
      challengeList: newList,
      currentNo:  0,
      correctNum: 0,
      showDialog: false,
      snackState: {
        showSnack: false
      }
    });
  }

  onIsCorrectCompleted(res) {
    const result = res.result ? 'Correct' : 'Incorrect';
    this.state.challengeList[this.state.currentNo].result = result;
    const correctNum = (res.result) ?
      this.state.correctNum + 1 : this.state.correctNum;

    const showDialog = (this.state.currentNo + 1) === this.state.challengeList.length;

    const newState = {
      challengeList: this.state.challengeList,
      currentNo: this.state.currentNo + 1,
      correctNum: correctNum,
      showDialog: showDialog,
    };

    if(showDialog === false) {
      newState.snackState = {
        showSnack: true,
        isCorrect: res.result
      };
    }
    this.setState(newState);
  }

  onEditingAnswer(value) {
    this.state.challengeList[this.state.currentNo].answer = value;
    this.setState({ challengeList: this.state.challengeList });
  }

  onCloseSnack() {
    this.setState({snackState: { showSnack : false }});
  }
}
