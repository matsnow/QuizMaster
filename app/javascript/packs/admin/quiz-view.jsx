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
      <div style={{ display: 'flex', marginBottom: '15px', alignItems: 'center' }}>
        <div style={{marginRight: '10px'}}>Q. {this.props.question}</div>
        <div style={{marginRight: '30px'}}>A. {this.props.answer}</div>
        <FlatButton label="Edit" onClick={this.editQuiz}
          style={{ borderRadius: '5px', marginRight: '10px' }} />
        <FlatButton label="Delete" onClick={this.deleteQuiz} secondary={true} buttonStyle={{ borderRadius: '5px' }}/>
      </div>
    );
  }
}
