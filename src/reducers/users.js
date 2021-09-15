import { FETCH_USERS, ANSWER_POLL, ADD_QUESTION } from './../actions';

export default function users(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        ...action.users
      };
    case ANSWER_POLL:
      const {authedUser, questionId, answer} = action;
      return {
        ...state,
        [authedUser] : {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [questionId]: answer
            //@todo
            /*
              Fair question to the developpers:
                whom responsibility is it to avoid overriding in this object?
                i.e. to avoid the same user to answer twice the same question,
                since "no cheating" is a requirement!
            */
          }
        }
      };
    case ADD_QUESTION:
      const {question} = action;
      const {author} = question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [
            ...state[author].questions,
            question.id
          ]
        }
      };
    default:
      return state;
  }
}
