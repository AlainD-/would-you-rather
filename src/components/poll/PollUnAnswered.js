import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';
import { getQuestion } from '../../utils/helper';
import { handleAnswerPoll } from '../../actions/shared';
import QuestionNotFound from '../_common/QuestionNotFound';
import PollOptionChoice from './PollOptionChoice';
import PollAnswered from './PollAnswered';
import UserAvatar from '../_common/UserAvatar';

export default function PollUnAnswered({id}) {
  const dispatch = useDispatch();
  const {question, author, authedUser, isAnswered} = useSelector(state => getQuestion(state, id));
  const [answer, setAnswer] = useState(null);
  const flexClasses = 'p-fluid flex-grow-1 align-items-center justify-content-center';

  if (!question) {
    return <QuestionNotFound />;
  }

  if (isAnswered) {
    return <PollAnswered id={id} />;
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (answer) {
      dispatch(handleAnswerPoll({authedUser, qid: id, answer}));
      setAnswer(() => null);
    }
  };

  const header = `${author.name} asks:`;

  return (
    <Panel header={header}>
      <div className="flex">
        <UserAvatar url={author.avatarURL} />
        <Divider layout="vertical" />
        <form
          onSubmit={handleSubmit}
          className={flexClasses}
        >
          <h3>Would You Rather...</h3>
          {['optionOne', 'optionTwo'].map(option => (
            <PollOptionChoice
              key={option}
              option={option}
              label={question[option]?.text}
              onChange={() => setAnswer(() => option)}
              isChecked={answer === option}
            />
          ))}
          <Button
            type="submit"
            label="Submit"
            className="p-button-success p-button-sm"
            disabled={!authedUser || !answer}
          />
        </form>
      </div>
    </Panel>
  );
}
