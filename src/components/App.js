
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleInitialData } from './../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import Login from './Login';
import Questions from './Questions';
import PageNotFound from './PageNotFound';
import NavBar from './Navbar';
import QuestionPoll from './QuestionPoll';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import ErrorMessage from './ErrorMessage';

export default function App() {
  const dispatch = useDispatch();
  const authedUser = useSelector(({authedUser}) => authedUser);
  // const loading = useSelector(({authedUser}) => authedUser === null);

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
              <Route path="/new">
                <NewQuestion />
              </Route>
              <Route path="/leader-board">
                <LeaderBoard />
              </Route>
              <Route path="/questions/:id">
                <QuestionPoll />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
            {!authedUser && <Redirect to="/login" />}
          </div>
        </div>
      </div>
    </Router>
  );
};
