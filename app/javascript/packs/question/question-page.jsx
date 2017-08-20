import React        from 'react'
import PropTypes    from 'prop-types'
import GlobalHeader from '../common/global-header';
import AnswerArea   from './answer-area';
import QuizList     from './quiz-list';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const layout = { display: 'flex', height: '70vh' };
    return (
      <div>
        <GlobalHeader index={this.props.index}/>
        <div style={layout}>
          <AnswerArea />
          <QuizList />
        </div>
      </div>
    );
  }
}
