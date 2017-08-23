import Reflux from 'reflux';
import request from 'superagent';
import * as _  from 'lodash';

export const AdminActions = Reflux.createActions([
  {
    'getall': {children: ['completed', 'failed']},
    'create': {children: ['completed', 'failed']},
    'delete': {children: ['completed', 'failed']},
    'update': {children: ['completed', 'failed']}
  },
  'newQuiz', 'editQuiz', 'editQuestion', 'editAnswer', 'editCategory'
]);

const url = '/api/v1/quiz';

// 初期表示時に使用
AdminActions.getall.listen(() => {
  return request.get(url)
    .then((res) => {
      console.log('res = ', res.body);
      AdminActions.getall.completed(res.body)
     })
    .catch(AdminActions.getall.failed);
});

AdminActions.create.listen((data) => {
  const token = AdminActions.getToken();
  return request.post(url).send(data)
    .set('X-CSRF-Token', token)
    .then((res) => { AdminActions.create.completed(res.body, data) })
    .catch(AdminActions.create.failed);
});

AdminActions.update.listen((data) => {
  const token = AdminActions.getToken();
  return request.put(url).send(data)
    .set('X-CSRF-Token', token)
    .then((res) => { AdminActions.update.completed(res.body, data) })
    .catch(AdminActions.update.failed);
});

AdminActions.delete.listen((id) => {
  const token = AdminActions.getToken();
  return request.delete(url).send({id: id})
    .set('X-CSRF-Token', token)
    .then((res) => { AdminActions.delete.completed(res.body, id) })
    .catch(AdminActions.delete.failed);
});

AdminActions.getToken = () => {
  return document.getElementsByName('csrf-token')[0].content;
};


export default AdminActions;
