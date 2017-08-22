import Reflux         from 'reflux';
import React          from 'react'
import PropTypes      from 'prop-types'
import RichTextEditor from 'react-rte';
import AdminAction    from './admin-action';
import AdminStore     from './admin-store';

export default class QuestionForm extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = AdminStore;
  }

  onChange(value) {
    AdminAction.editQuestion(value);
  }

  render() {
    return (
      <div>
        <h3>Question</h3>
        <RichTextEditor
          value={this.state.editorString}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
