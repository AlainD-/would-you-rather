import {
  _getUsers,
  _getQuestions
} from './_DATA';

export async function getInitialData() {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {users, questions};
};
