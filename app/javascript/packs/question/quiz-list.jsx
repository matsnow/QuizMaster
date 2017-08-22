import React from 'react'
import PropTypes from 'prop-types'

export default class QuizList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='quiz-list'>
        <label className='quiz-list__label'>Questions</label>
        <ul>
          {this.props.challengeList.map((challenge, i) => {
            const addClass = 'quiz-list__item--' + challenge.result.toLowerCase();

            return (
              <li style={{ listStyle: 'none' }} key={i}
                className={`quiz-list__item ${addClass}`}>{`Q${i+1}.`}
                <span>{challenge.result}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
