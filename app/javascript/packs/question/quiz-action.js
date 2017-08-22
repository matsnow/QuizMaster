import Reflux from 'reflux';
import request from 'superagent';

export const QuizActions = Reflux.createActions([
  {
    'challenges': {children: ['completed', 'failed']},
    'isCorrect':  {children: ['completed', 'failed']},
  },
  'editingAnswer', 'closeSnack'
]);

const url = '/api/v1/quiz';
const token = document.getElementsByName('csrf-token')[0].content;

QuizActions.challenges.listen(() => {
  return request.get(url + '/challenges')
    .then((res) => {
      console.log('res = ', res.body);
      QuizActions.challenges.completed(res.body)
     })
    .catch(QuizActions.challenges.failed);
});

QuizActions.isCorrect.listen((data) => {
  return request.post(url + '/is_correct').send(data)
    .set('X-CSRF-Token', token)
    .then((res) => { QuizActions.isCorrect.completed(res.body, data) })
    .catch(QuizActions.isCorrect.failed);
});

export default QuizActions;
