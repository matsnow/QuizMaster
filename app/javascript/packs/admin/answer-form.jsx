import React from 'react'
import PropTypes from 'prop-types'
import TextField  from 'material-ui/TextField'

export default class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Answer"
          floatingLabelFixed={false}
          floatingLabelStyle={{ fontSize: '20px', fontWeight: 'bold' }}
          floatingLabelShrinkStyle={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}
        />
      </div>
    );
  }
}
