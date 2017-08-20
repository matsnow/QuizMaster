import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider';

export default class QuizView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: 'flex', marginBottom: '15px', alignItems: 'center' }}>
        <div style={{marginRight: '10px'}}>Q. {this.props.question}</div>
        <div style={{marginRight: '30px'}}>A. {this.props.answer}</div>
        <FlatButton label="Edit"   style={{ borderRadius: '5px', marginRight: '10px' }} />
        <FlatButton label="Delete" secondary={true}  buttonStyle={{ borderRadius: '5px' }}/>
      </div>
    );
  }
}
