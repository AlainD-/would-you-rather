import { useSelector } from 'react-redux';
import { sortBy as _sortBy } from 'lodash/fp';
import { TabView, TabPanel } from 'primereact/tabview';
import QuestionPreview from './QuestionPreview';
import InfoMessage from '../_common/InfoMessage';

function getUserQuestions({authedUser, users, questions}) {
  const answeredQuestionIds = !authedUser ? [] : Object.keys(users[authedUser]?.answers || {});
  const unAnsweredQuestionIds = Object.keys(questions).filter(id => !answeredQuestionIds.includes(id));
  // sort by date: most recent first
  const answeredQuestions = _sortBy(({timestamp}) => -timestamp)(answeredQuestionIds.map(id => questions[id]));
  const unAnsweredQuestions = _sortBy(({timestamp}) => -timestamp)(unAnsweredQuestionIds.map(id => questions[id]));
  return {
    answeredQuestions,
    unAnsweredQuestions
  };
}

export default function Questions() {
  const {answeredQuestions, unAnsweredQuestions} = useSelector(getUserQuestions);

  return (
    <TabView>
      <TabPanel header="Unanswered Questions">
        {!unAnsweredQuestions.length && <InfoMessage text="There are no new questions at the moment." />}
        {unAnsweredQuestions.map(({id}) => (
          <QuestionPreview key={id} id={id} />
        ))}
      </TabPanel>
      <TabPanel header="Answered Questions">
        {!answeredQuestions.length && <InfoMessage text="You have not answered any question yet." />}
        {answeredQuestions.map(({id}) => (
          <QuestionPreview key={id} id={id} />
        ))}
      </TabPanel>
    </TabView>
  );
}
