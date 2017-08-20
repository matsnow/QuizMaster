import React from 'react'
import PropTypes from 'prop-types'
import RichTextEditor from 'react-rte';

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    const defaultValue = this.props.rawQuestion || RichTextEditor.createEmptyValue();
    this.state = { value: defaultValue }
  }

  onChange(value) {
    this.setState({value});

    // ActionでStoreの両方を更新する。
    if( this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      )
    }
  }

  render() {
    return (
      <div>
        <h3>Question</h3>
        <RichTextEditor
          value ={this.state.value}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
