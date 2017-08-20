import React        from 'react'
import PropTypes    from 'prop-types'
import QuizView     from './quiz-view';
import RaisedButton   from 'material-ui/RaisedButton'
import AdminAction     from './admin-action';

export default class QuizCollection extends React.Component {
  constructor(props) {
    super(props);
    this.createNewQuiz = this.createNewQuiz.bind(this);
  }

  createNewQuiz() {
    AdminAction.newQuiz();
  }

  render() {
    return (
      <div style={{flex :'1', padding: '2%'}}>
        <RaisedButton
          label="Add new question"
          backgroundColor="#40CA40"
          labelColor="#ffffff"
          buttonStyle={{ borderRadius: '5px' }}
          onClick={this.createNewQuiz}
        />
        <div style={{marginTop: '10px'}}>
        {
          this.props.quizList.map((quiz, i) => {
            return <QuizView key={i} {...quiz}/>
          })
        }
        </div>
      </div>
    );
  }
}
