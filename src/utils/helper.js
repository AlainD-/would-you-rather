import { sortBy as _sortBy, take as _take } from 'lodash/fp';

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

export function getUsers({users}) {
  return _sortBy(user => user.name)(Object.keys(users).map(id => users[id]));
}

export function getLeaderBoard({users}) {
  const answered = user => !!user.answers ? Object.keys(user.answers).length : 0;
  const created = user => user.questions?.length || 0;
  const score = user => answered(user) + created(user);
  const scoredUsers = getUsers({users}).map(user => (
    {
      ...user,
      answered: answered(user),
      created: created(user),
      score: score(user)
    }
  ));

  return _take(3)(_sortBy(user => -user.score)(scoredUsers));
}
