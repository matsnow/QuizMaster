import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class AnswerArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNo: 1,
      questionText: `abcede<strong>ZZZ</strong>aaa`
    };
  }

  render() {
    const cardStyle = { flex: '2', margin: '2%', boxShadow: 'rgba(0, 0, 0, 0.12) 2px 2px 10px 10px' };
    const buttonStyle = { margin: '12px' };
    const headerStyle = { borderBottom : '1px solid #e0e0e0' };
    const titleStyle = { fontSize: '20px' };
    return (
      <Card style={cardStyle}>
        <CardHeader
          title={"Q" + this.state.questionNo + "."}
          subtitle="Subtitle"
          actAsExpander={true}
          showExpandableButton={false}
          style={headerStyle}
          titleStyle={titleStyle}
        />
        <CardText expandable={false}>
          {this.state.questionText}

        </CardText>
        <CardActions>
          <div>
            <TextField
              floatingLabelText="Input your answer"
              floatingLabelFixed={false}
            />
          </div>
          <RaisedButton label="Answer" primary={true} style={buttonStyle} />
        </CardActions>
      </Card>
    );
  }
}
