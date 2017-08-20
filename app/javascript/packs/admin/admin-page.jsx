import React           from 'react'
import Reflux          from 'reflux';
import PropTypes       from 'prop-types'
import GlobalHeader    from '../common/global-header';
import EditQuizform    from './edit-quiz-form';
import QuizCollection  from './quiz-collection';
import AdminStore      from './admin-store';
import AdminAction     from './admin-action';

export default class AdminPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = AdminStore;
  }

  componentDidMount() {
    AdminAction.getall();
  }

  render() {
    return (
      <div>
        <GlobalHeader index={this.props.index}/>
        <div style={{display: 'flex'}}>
          <EditQuizform editing={this.state.editingQuiz}/>
          <QuizCollection quizList={this.state.quizList}/>
        </div>
      </div>
    );
  }
}
