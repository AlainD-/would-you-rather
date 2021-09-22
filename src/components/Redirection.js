import { Redirect} from 'react-router';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Redirection() {
  const authedUser = useSelector(({authedUser}) => authedUser);
  const {pathname = null} = useLocation();
  const loginRoute = useRouteMatch('/login');
  const notFoundRoute = useRouteMatch('/not-found');

  return (
    <>
      {!authedUser && !loginRoute && !notFoundRoute && (
        <Redirect to={{pathname: "/login", search: `redirect=${pathname}`}} />
      )}
    </>
  );
};
