import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from './_DATA';

export function apiLogger(message = 'An unexpected error occurred', error) {
  console.error({message, error});
};

export async function getInitialData() {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {users, questions};
};

/**
 * Save the user's answer to a question
 * @param {{authedUser: string, qid: string, answer: string}} info
 * @returns {Promise<void>}
 */
export function saveQuestionAnswer(info /* { authedUser, qid, answer } */) {
  return _saveQuestionAnswer(info);
};

/**
 * Add a new question
 * @param {{optionOneText: string, optionTwoText: string, author: string}} question
 * @returns {Promise<Question>}
 */
export function saveQuestion(question) {
  return _saveQuestion(question);
}
