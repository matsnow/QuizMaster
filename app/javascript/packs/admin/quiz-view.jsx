import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import AdminAction from './admin-action';

export default class QuizView extends React.Component {
  constructor(props) {
    super(props);
    this.editQuiz   = this.editQuiz.bind(this);
    this.deleteQuiz = this.deleteQuiz.bind(this);
  }

  editQuiz() {
    AdminAction.editQuiz(this.props.id)
    window.scroll(0, 0);
  }

  deleteQuiz() {
    AdminAction.delete(this.props.id)
  }

  render() {
    return (
      <div className='quiz-view'>
        <div className='quiz-view__question' dangerouslySetInnerHTML={{__html: 'Q. ' + this.props.question.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')}}></div>
        <div className='quiz-view__answer'>A. {this.props.answer}</div>
        <FlatButton label="Edit" onClick={this.editQuiz} className='quiz-view__button' />
        <FlatButton label="Delete" onClick={this.deleteQuiz} secondary={true} buttonStyle={{ borderRadius: '5px' }} className='quiz-view__button'/>
      </div>
    );
  }
}
