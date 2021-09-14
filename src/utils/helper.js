export function getQuestion({questions, users, authedUser}, id) {
  const question = questions[id];
  const author = !question ? null : users[question.author];
  const isAnswered = !authedUser ? false : Object.keys(users[authedUser].answers).includes(id);

  return {
    question,
    author,
    authedUser,
    isAnswered
  };
};
