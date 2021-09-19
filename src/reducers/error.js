import { SET_ERROR_MESSAGE } from './../actions';

export default function errorMessage(state = null, action) {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return action.error;
    default:
      return state;
  }
};
