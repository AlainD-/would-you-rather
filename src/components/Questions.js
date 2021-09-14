import { useSelector } from 'react-redux';
import { sortBy as _sortBy } from 'lodash/fp';
import { TabView, TabPanel } from 'primereact/tabview';
import QuestionPreview from './QuestionPreview';
import InfoMessage from './InfoMessage';

function getUserQuestions({authedUser, users, questions}) {
  const answeredQuestionIds = !authedUser ? [] : Object.keys(users[authedUser]?.answers || {});
  const unAnsweredQuestionIds = Object.keys(questions).filter(id => !answeredQuestionIds.includes(id));
  // @todo manage sort by date
  return {
    answeredQuestionIds,
    unAnsweredQuestionIds
  };
}

export default function Questions() {
  const {answeredQuestionIds, unAnsweredQuestionIds} = useSelector(getUserQuestions);

  return (
    <TabView>
      <TabPanel header="Unanswered Questions">
        {!unAnsweredQuestionIds.length && <InfoMessage text="There are no new questions at the moment." />}
        {unAnsweredQuestionIds.map(id => (
          <QuestionPreview key={id} id={id} />
        ))}
      </TabPanel>
      <TabPanel header="Answered Questions">
        {!answeredQuestionIds.length && <InfoMessage text="You have not answered any question yet." />}
        {answeredQuestionIds.map(id => (
          <QuestionPreview key={id} id={id} />
        ))}
      </TabPanel>
    </TabView>
  );
}
