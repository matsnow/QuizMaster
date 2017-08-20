import React from 'react'
import PropTypes from 'prop-types'
import TextField  from 'material-ui/TextField'

export default class AnswerForm extends React.Component {
  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Answer"
          floatingLabelFixed={false}
          floatingLabelStyle={{ fontSize: '20px', fontWeight: 'bold' }}
          floatingLabelShrinkStyle={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}
          value={this.props.answer}
        />
      </div>
    );
  }
}
