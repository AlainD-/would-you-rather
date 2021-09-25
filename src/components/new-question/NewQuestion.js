import { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { handleAddQuestion } from '../../actions/shared';

export default function NewQuestion() {
  const history = useHistory();
  const dispatch = useDispatch();
  const authedUser = useSelector(({authedUser}) => authedUser);
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  const maxLength = 100;

  const isDisabled = !optionOneText || !optionTwoText;

  const characterLeft = option => !option ? maxLength : maxLength - option.length;

  const handleSubmit = e => {
    e.preventDefault();
    if (optionOneText && optionTwoText) {
      dispatch(handleAddQuestion({authedUser, optionOneText, optionTwoText}));
      history.push('/');
    }
  };

  return (
    <Panel header="Create a new question">
      <form onSubmit={handleSubmit} className="p-fluid">
        <h5>Complete the question:</h5>
        <h3>Would you rather...</h3>
        <InputText
          type="text"
          name="optionOneText"
          value={optionOneText}
          onChange={e => setOptionOneText(() => e.target.value)}
          placeholder="Enter the first option here"
          maxLength={maxLength}
        />
        {characterLeft(optionOneText) < 30 && <small id="optionOneText-help" className="p-error block flex justify-content-end">{characterLeft(optionOneText)}</small>}
        <Divider align="center">OR</Divider>
        <InputText
          type="text"
          name="optionTwoText"
          value={optionTwoText}
          onChange={e => setOptionTwoText(() => e.target.value)}
          placeholder="Enter the second option here"
          maxLength={maxLength}
        />
        {characterLeft(optionTwoText) < 30 && <small id="optionTwoText-help" className="p-error block flex justify-content-end">{characterLeft(optionTwoText)}</small>}
        <Button
          type="submit"
          label="Submit"
          className="mt-2"
          disabled={isDisabled} />
      </form>
    </Panel>
  );
};
