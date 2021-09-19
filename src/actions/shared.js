import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../utils/api';
import { fetchUsers } from './users';
import { fetchQuestions } from './questions';
import { apiLogger, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { setErrorMessage } from './error';

export const ANSWER_POLL = 'ANSWER_POLL';
export const ADD_QUESTION = 'ADD_QUESTION';

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
 * @param {{authedUser: string, qid: string, answer: string}} info
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
      dispatch(setErrorMessage('Something wrong happened during your vote. Please try again.'));
      dispatch(hideLoading());
    }
  };
};

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion({authedUser: author, optionOneText, optionTwoText}) {
  return async dispatch => {
    dispatch(showLoading());
    try {
      const question = await saveQuestion({author, optionOneText, optionTwoText});
      dispatch(addQuestion(question));
      dispatch(hideLoading());
    } catch (error) {
      apiLogger('An error occurred in handleAddQuestion', error);
      dispatch(setErrorMessage('Something wrong happened when submitting the question. Please try again.'));
      dispatch(hideLoading());
    }
  };
};

