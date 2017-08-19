import React from 'react'
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(value) {
    location.href = value;
  }

  render() {
    const tabs = (
      <Tabs
        onChange={this.handleChange}
        initialSelectedIndex={this.props.index}
      >
        <Tab label="Quiz Mode" value="/" />
        <Tab label="Manage"    value="/admin/index" />
      </Tabs>
    );
    const linkStyle = { width: '30%' };
    const hidden = { display: 'none' };
    return (
      <AppBar
        title='Quiz Master'
        iconElementRight={tabs}
        iconStyleLeft={hidden}
        iconStyleRight={linkStyle}
       />
    );
  }
}
