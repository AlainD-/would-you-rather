import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';
import error from './error';

export default combineReducers({
  authedUser,
  users,
  questions,
  error,
  loadingBar: loadingBarReducer
});
