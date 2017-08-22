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
    console.log(`ID = ${this.props.editing.id}`);
    return this.props.editing.id !== undefined;
  }

  create() {
    AdminAction.create(this.props.editing);
  }

  update() {
    AdminAction.update(this.props.editing);
  }

  render() {
    const titleStyle = { fontSize: '20px' };
    const isEdit = this.isExist();

    return (
      <div className='edit-quiz-form'>
        <Card>
          <CardHeader
            title={isEdit? `Edit Quiz No.${this.props.editing.id}` : 'Add Quiz'}
            actAsExpander={true}
            showExpandableButton={false}
            className='edit-quiz-form__header'
            titleStyle={titleStyle}
          />
          <CardText expandable={false}>
            <QuestionForm question={this.props.editing.question} />
            <AnswerForm   answer={this.props.editing.answer}/>
            <CategoryList category={this.props.editing.category}/>
          </CardText>
          <CardActions>
            <RaisedButton
              label={isEdit? 'Edit' : 'Add'}
              primary={true}
              onClick={isEdit? this.update : this.create}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}
