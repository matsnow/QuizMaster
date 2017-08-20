import React        from 'react'
import PropTypes    from 'prop-types'
import QuestionForm from './question-form';
import AnswerForm   from './answer-form';
import CategoryList from './category-list';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/FlatButton'

export default class EditQuizform extends React.Component {
  constructor(props) {
    super(props);
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
            title='Add Quiz'
            actAsExpander={true}
            showExpandableButton={false}
            style={headerStyle}
            titleStyle={titleStyle}
          />
          <CardText expandable={false}>
            <QuestionForm />
            <AnswerForm />
            <CategoryList />
          </CardText>
          <CardActions>
            <RaisedButton label="Add" primary={true}/>
          </CardActions>
        </Card>
      </div>
    );
  }
}
