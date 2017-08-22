import React        from 'react'
import Reflux       from 'reflux';
import PropTypes    from 'prop-types'
import GlobalHeader from '../common/global-header';
import AnswerArea   from './answer-area';
import QuizList     from './quiz-list';
import QuizStore    from './quiz-store';
import QuizAction   from './quiz-action';

export default class QuestionPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = QuizStore;
  }

  componentDidMount() {
    QuizAction.challenges();
  }

  render() {
    return (
      <div>
        <GlobalHeader index={this.props.index}/>
        <div className='question-page'>
          <AnswerArea
             currentQuiz={this.state.challengeList[this.state.currentNo]}
             currentNo={this.state.currentNo + 1}
             showDialog={this.state.showDialog}
             correctNum={this.state.correctNum}
             totalNum={this.state.challengeList.length}
             snackState={this.state.snackState}
           />
          <QuizList challengeList={this.state.challengeList}/>
        </div>
      </div>
    );
  }
}
