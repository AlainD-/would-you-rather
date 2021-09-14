import { FETCH_QUESTIONS, ANSWER_POLL } from './../actions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_POLL:
      const {questionId, answer, authedUser} = action;
      return {
        ...state,
        [questionId] : {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: [
              ...state[questionId][answer].votes,
              authedUser
            ]
            //@todo
            /*
              Fair question to the developpers:
                whom responsibility is it to avoid duplication in this array?
                i.e. to avoid the same user to answer twice the same question,
                since "no cheating" is a requirement!
            */
          }
        }
      };
    default:
      return state;
  }
}
