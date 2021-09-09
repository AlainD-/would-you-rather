import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../utils/api';
import { fetchUsers } from './users';
import { fetchQuestions } from './questions';

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    const {users, questions} = await getInitialData();
    dispatch(fetchUsers(users));
    dispatch(fetchQuestions(questions));
    dispatch(hideLoading());
  };
};
