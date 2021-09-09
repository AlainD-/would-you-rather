import { useSelector } from 'react-redux';
import { sortBy as _sortBy } from 'lodash/fp';
import { TabView, TabPanel } from 'primereact/tabview';

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
        {unAnsweredQuestionIds.map(id => (
          <div key={id}>Question ID: {id}</div>
        ))}
      </TabPanel>
      <TabPanel header="Answered Questions">
        {answeredQuestionIds.map(id => (
          <div key={id}>Question ID: {id}</div>
        ))}
      </TabPanel>
    </TabView>
  );
}
