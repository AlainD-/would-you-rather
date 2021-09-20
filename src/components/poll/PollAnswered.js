import { useSelector } from 'react-redux';
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';
import { getQuestion } from '../../utils/helper';
import QuestionNotFound from '../_common/QuestionNotFound';
import PollAnswer from './PollAnswer';
import PollUnAnswered from './PollUnAnswered';
import UserAvatar from '../_common/UserAvatar';

export default function PollAnswered({id}) {
  const {question, author, authedUser, isAnswered} = useSelector(state => getQuestion(state, id));
  const options = ['optionOne', 'optionTwo'];

  if (!question) {
    return <QuestionNotFound />;
  }

  if (!isAnswered) {
    return <PollUnAnswered id={id} />;
  }

  const isAnsweredByUser = option => question[option].votes.includes(authedUser);

  const totalVotes = options.map(option => question[option].votes.length).reduce((a, b) => a + b, 0);

  const header = `Asked by ${author.name}:`;

  return (
    <Panel header={header}>
      <div className="flex">
        <UserAvatar url={author.avatarURL} />
        <Divider layout="vertical" />
        <div className="p-fluid flex-grow-1 align-items-center justify-content-center">
          <h3>Results</h3>
          {options.map(option => (
            <PollAnswer
              key={option}
              option={option}
              text={`Would you rather ${question[option].text}?`}
              isUserVote={isAnsweredByUser(option)}
              totalVotes={totalVotes}
              voted={question[option].votes.length}
            />
          ))}
        </div>
      </div>
    </Panel>
  );
}
