import React        from 'react'
import PropTypes    from 'prop-types'
import QuizView     from './quiz-view';
import RaisedButton   from 'material-ui/RaisedButton'

export default class QuizCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizList: [
        {question: 'a', answer: 'b', category: 0},
        {question: 'a', answer: 'b', category: 0},
        {question: 'a', answer: 'b', category: 0},
        {question: 'a', answer: 'b', category: 0},
        {question: 'a', answer: 'b', category: 0},
      ]
    };
  }

  render() {
    return (
      <div style={{flex :'1', padding: '2%'}}>
        <RaisedButton label="Add new question" backgroundColor="#40CA40" labelColor="#ffffff" buttonStyle={{ borderRadius: '5px' }}/>
        <div style={{marginTop: '10px'}}>
        {
          this.state.quizList.map((quiz, i) => {
            return <QuizView key={i} {...quiz}/>
          })
        }
        </div>
      </div>
    );
  }
}
