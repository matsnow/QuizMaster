import React        from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField    from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import QuizAction   from './quiz-action';
import AnswerSnack  from './answer-snack';
import ResultDialog from './result-dialog';

export default class AnswerArea extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(event) {
    QuizAction.editingAnswer(event.target.value);
  }

  onClick() {
    QuizAction.isCorrect(this.props.currentQuiz);
  }

  render() {
    return (
      <Card className='answer-area__card'>
        <CardHeader
          title={"Q" + this.props.currentNo + "."}
          className='answer-area__header'
          actAsExpander={true}
          showExpandableButton={false}
          titleStyle={{fontSize: '20px'}}
        />
        <CardText expandable={false} dangerouslySetInnerHTML={{__html:this.props.currentQuiz.question}}>
        </CardText>
        <CardActions>
          <div>
            <TextField
              floatingLabelText="Input your answer"
              floatingLabelFixed={false}
              onChange={this.onChange.bind(this)}
              value={this.props.currentQuiz.answer}
            />
          </div>
          <RaisedButton
            label="Answer"
            primary={true}
            className='answer-area__button'
            onClick={this.onClick.bind(this)}
          />
        <AnswerSnack {...this.props.snackState} />
        <ResultDialog {...this.props} />
        </CardActions>
      </Card>
    );
  }
}

AnswerArea.defaultProps = {
  currentNo: 1,
  currentQuiz: {
    question_id: 0,
    question:    '',
    category:    1,
    result:      'Unanswered',
  }
};
