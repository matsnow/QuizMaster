import React from 'react'
import ReactDOM from 'react-dom'
import QuestionPage from './question/question-page';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <QuestionPage />
  </MuiThemeProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.body.appendChild(document.createElement('div')));
})
