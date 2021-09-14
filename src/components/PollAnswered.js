import { useSelector } from 'react-redux';
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';
import { getQuestion } from '../utils/helper';
import QuestionNotFound from './QuestionNotFound';

export default function PollAnswered({id}) {
  const {question, author, authedUser} = useSelector(state => getQuestion(state, id));

  if (!question) {
    return <QuestionNotFound />;
  }

  const isAnsweredByUser = option => question[option].votes.includes(authedUser);

  const header = `Asked by ${author.name}:`;

  return (
    <Panel header={header}>
      <div className="flex">
        <img alt="avatar" src={author.avatarURL} height="90px" />
        <Divider layout="vertical" />
        <div className="p-fluid flex-grow-1 align-items-center justify-content-center">
          <h3>Results</h3>
          {['optionOne', 'optionTwo'].map(option => (
            <div key={option}>Would you rather {question[option].text}? {isAnsweredByUser(option) && '*'}</div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
