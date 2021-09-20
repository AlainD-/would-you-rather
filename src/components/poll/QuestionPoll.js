import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router';
import { getQuestion } from '../../utils/helper';
import PollAnswered from './PollAnswered';
import PollUnAnswered from './PollUnAnswered';

export default function QuestionPoll() {
  const {id} = useParams();
  const {question, isAnswered} = useSelector(state => getQuestion(state, id));

  if (!question) {
    return <Redirect to="/not-found" />;
  }

  return (
    <>
      {isAnswered && <PollAnswered id={id} />}
      {!isAnswered && <PollUnAnswered id={id} />}
    </>
  );
}
