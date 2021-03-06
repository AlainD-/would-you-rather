
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleInitialData } from './../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import Login from './Login';
import Questions from './questions/Questions';
import PageNotFound from './PageNotFound';
import NavBar from './Navbar';
import QuestionPoll from './poll/QuestionPoll';
import LeaderBoard from './leader-board/LeaderBoard';
import NewQuestion from './new-question/NewQuestion';
import ErrorMessage from './ErrorMessage';
import Redirection from './Redirection';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <div className="flex justify-content-center">
        <div className="flex-column">
          <NavBar />
          <LoadingBar />
          <ErrorMessage />
          <div className="pt-3">
            <Switch>
              <Route exact path="/">
                <Questions />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/add">
                <NewQuestion />
              </Route>
              <Route path="/leaderboard">
                <LeaderBoard />
              </Route>
              <Route path="/questions/:id">
                <QuestionPoll />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
            <Redirection />
          </div>
        </div>
      </div>
    </Router>
  );
};
