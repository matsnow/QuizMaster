import React from 'react'
import ReactDOM from 'react-dom'
import AdminPage from './admin/admin-page';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <AdminPage index={1}/>
  </MuiThemeProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.body.appendChild(document.createElement('div')));
})
