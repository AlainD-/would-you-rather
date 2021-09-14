import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../utils/api';
import { fetchUsers } from './users';
import { fetchQuestions } from './questions';
import { saveQuestionAnswer, apiLogger } from '../utils/api';

export const ANSWER_POLL = 'ANSWER_POLL';

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    const {users, questions} = await getInitialData();
    dispatch(fetchUsers(users));
    dispatch(fetchQuestions(questions));
    dispatch(hideLoading());
  };
};

function answerQuestion({authedUser, qid, answer}) {
  return {
    type: ANSWER_POLL,
    authedUser,
    questionId: qid,
    answer
  };
}

/**
 * Handle when a user answers a question
 * @param {{authedUser, qid, answer}} info
 * @returns {(dispatch: any) => Promise<void>}
 */
export function handleAnswerPoll(info) {
  return async dispatch => {
    dispatch(showLoading());
    try {
      await saveQuestionAnswer(info);
      dispatch(answerQuestion(info));
      dispatch(hideLoading());
    } catch (error) {
      apiLogger('An error occurred in handleAnswerQuestion', error);
      // @todo It would be nice to display a nice toast error message
      dispatch(hideLoading());
    }
  };
};

