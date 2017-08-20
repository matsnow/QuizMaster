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
  'newQuiz', 'editQuiz'
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
  return request.post(url).send(data)
    .then((res) => { AdminActions.create.completed(res, data) })
    .catch(AdminActions.create.failed);
});

AdminActions.update.listen((data) => {
  return request.put(url).send(data)
    .then((res) => { AdminActions.update.completed(res, data) })
    .catch(AdminActions.update.failed);
});

AdminActions.delete.listen((id) => {
  return request.delete(url).send({id: id})
    .then((res) => { AdminActions.delete.completed(res, id) })
    .catch(AdminActions.delete.failed);
});

export default AdminActions;
