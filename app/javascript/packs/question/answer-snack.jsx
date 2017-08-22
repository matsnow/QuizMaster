import React      from 'react';
import Snackbar   from 'material-ui/Snackbar';
import QuizAction from './quiz-action';

export default class AnswerSnack extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRequestClose = () => {
    QuizAction.closeSnack();
  };

  render() {
    const message = this.props.isCorrect ? "You're right!" : 'Sorry,　wrong answer.';
    const addClass = ' answer-snack' + (this.props.isCorrect ? "--correct" : '--incorrect');

    return (
      <Snackbar
        open={this.props.showSnack}
        className={'answer-snack' + addClass}
        message={message}
        autoHideDuration={2000}
        onRequestClose={this.handleRequestClose}
      />
    );
  }
}
