import React        from 'react'
import PropTypes    from 'prop-types'
import QuestionForm from './question-form';
import AnswerForm   from './answer-form';
import CategoryList from './category-list';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/FlatButton'
import AdminAction     from './admin-action';

export default class EditQuizform extends React.Component {
  constructor(props) {
    super(props);
    this.isExist = this.isExist.bind(this);
    this.create  = this.create.bind(this);
    this.update  = this.update.bind(this);
  }

  isExist() {
    return this.props.editing.id !== null;
  }

  create() {
    AdminAction.create(this.props.editing);
  }

  update() {
    AdminAction.update(this.props.editing);
  }

  render() {
    const cardStyle   = { flex: '2', margin: '2%', borderRadius: '10px' };
    const buttonStyle = { margin: '12px' };
    const headerStyle = { borderBottom : '1px solid #e0e0e0' };
    const titleStyle  = { fontSize: '20px' };
    return (
      <div style={cardStyle}>
        <Card>
          <CardHeader
            title={(this.isExist()? 'Edit' : 'Add') + 'Quiz'}
            actAsExpander={true}
            showExpandableButton={false}
            style={headerStyle}
            titleStyle={titleStyle}
          />
          <CardText expandable={false}>
            <QuestionForm
              question={this.props.editing.question}
              rawQuestion={this.props.editing.rawQuestion}
            />
            <AnswerForm   answer={this.props.editing.answer}/>
            <CategoryList category={this.props.editing.category}/>
          </CardText>
          <CardActions>
            <RaisedButton
              label={this.isExist()? 'Edit' : 'Add'}
              primary={true}
              onClick={this.isExist()? this.update : this.create}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}
