import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer
} from './_DATA';

export async function getInitialData() {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {users, questions};
};

/**
 * Save the user's answer to a question
 * @param {{authedUser, qid, answer}} info
 * @returns {Promise<void>}
 */
export function saveQuestionAnswer(info /* { authedUser, qid, answer } */) {
  return _saveQuestionAnswer(info);
};

export function apiLogger(message = 'An unexpected error occurred', error) {
  console.error({message, error});
}
