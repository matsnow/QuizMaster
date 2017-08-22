import Reflux      from 'reflux';
import React       from 'react'
import PropTypes   from 'prop-types'
import TextField   from 'material-ui/TextField'
import AdminAction from './admin-action';
import AdminStore  from './admin-store';

export default class AnswerForm extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = AdminStore;
  }

  onChange(event, value) {
    AdminAction.editAnswer(value);
  }

  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Answer"
          floatingLabelFixed={false}
          floatingLabelStyle={{ fontSize: '20px', fontWeight: 'bold' }}
          floatingLabelShrinkStyle={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}
          value={this.state.editingQuiz.answer}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}
