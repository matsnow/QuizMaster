import React      from 'react'
import QuizAction from './quiz-action';
import Dialog     from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'

export default class ResultDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    QuizAction.challenges();
  };

  render() {
    const actions = [
      <FlatButton
        label='Restart!'
        primary={true}
        onClick={this.onClick.bind(this)}
      />,
    ];

    return (
      <Dialog
        title="This challenge's result"
        contentClassName='result-dialog'
        actions={actions}
        modal={true}
        open={this.props.showDialog}
      >
      {this.props.correctNum + ' / ' + this.props.totalNum}
      </Dialog>
    );
  }
}
