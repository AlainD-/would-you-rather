
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import Questions from './Questions';
import PageNotFound from './PageNotFound';
import NavBar from './Navbar';

export default function App() {
  return (
    <Router>
      <div className="flex justify-content-center">
        <div className="flex-column">
          <NavBar />
          <h3>Would You Rather?</h3>
          <Switch>
            <Route exact path="/">
              <Questions />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
