import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';
import { getQuestion } from './../utils/helper';
import QuestionNotFound from './QuestionNotFound';

export default function QuestionPreview({id}) {
  const {question, author, authedUser} = useSelector(state => getQuestion(state, id));
  const history = useHistory();
  const descriptionMax = 20;

  if (!question) {
    return <QuestionNotFound />;
  }

  const toPoll = () => {
    history.push(`/questions/${id}`);
  };

  const shortText = `...${question.optionOne.text.substring(0, descriptionMax)}...`;

  const header = `${author.name} asks:`;

  return(
    <Panel header={header} className="mb-3">
      <div className="flex">
        <img alt="avatar" src={author.avatarURL} height="90px" />
        <Divider layout="vertical" />
        <div className="p-fluid flex-grow-1 align-items-center justify-content-center">
          <h3>Would you rather</h3>
          <p>{shortText}</p>
          <Button
            type="button"
            label="View Poll"
            className="p-button-outlined p-button-sm"
            disabled={!authedUser}
            onClick={toPoll}
          />
        </div>
      </div>
    </Panel>
  );
}
