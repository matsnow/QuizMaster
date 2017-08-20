import React          from 'react'
import PropTypes      from 'prop-types'
import GlobalHeader   from '../common/global-header';
import EditQuizform   from './edit-quiz-form';
import QuizCollection from './quiz-collection';

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GlobalHeader index={this.props.index}/>
        <div style={{display: 'flex'}}>
          <EditQuizform/>
          <QuizCollection />
        </div>
      </div>
    );
  }
}
