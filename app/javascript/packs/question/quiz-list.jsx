import React from 'react'
import PropTypes from 'prop-types'

export default class QuizList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answeredQuestions: [
        'Correct',
        'Correct',
        'Incorrect',
        'Correct',
        'Unanswered',
        'Unanswered',
        'Unanswered',
        'Unanswered',
        'Unanswered',
        'Unanswered',
      ]
    };
  }

  render() {
    const listStyle = { flex: '1', paddingLeft: '2%', paddingTop: '3%', marginLeft: '3%', borderLeft: '1px solid #e0e0e0' };
    const labelStyle = { fontSize: '25px' };

    return (
      <div style={listStyle}>
        <label style={labelStyle}>Questions</label>
        <ul>
          {this.state.answeredQuestions.map((data, i) => {
            const itemStyle = { color: '#b2b2b2', paddingLeft: '10px' };
            if(data === 'Correct') {
              itemStyle.color = '#57ca59';
            } else if (data === 'Incorrect') {
              itemStyle.color = '#ff8080';
            }
            return (
              <li style={{ listStyle: 'none' }} key={i}>{`Q${i+1}.`}
                <span style={itemStyle}>{data}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
