import Reflux      from 'reflux';
import React       from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem    from 'material-ui/MenuItem';
import AdminAction from './admin-action';
import AdminStore  from './admin-store';

export default class CategoryList extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = AdminStore;
  }

  handleChange(event, index, value) {
    AdminAction.editCategory(value);
  }

  render() {
    return (
      <SelectField
        floatingLabelText="Category"
        value={this.state.editingQuiz.category}
        onChange={this.handleChange.bind(this)}
        floatingLabelStyle={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}
      >
        <MenuItem value={1} primaryText="Mathmatics" />
        <MenuItem value={2} primaryText="Science" />
        <MenuItem value={3} primaryText="History" />
        <MenuItem value={4} primaryText="Civics" />
        <MenuItem value={5} primaryText="Geography" />
        <MenuItem value={6} primaryText="Japanese" />
        <MenuItem value={7} primaryText="English" />
      </SelectField>
    );
  }
}
