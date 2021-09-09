import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { setAuthedUser } from '../actions';

export default function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const authedUser = useSelector(({authedUser}) => authedUser);
  const users = useSelector(({users}) => users);

  const onLogout = () => {
    dispatch(setAuthedUser(null));
    history.push('/login');
  };

  const start = <img alt="logo" src="images/logo/logo_6.svg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="50px" className="mr-2"></img>;

  const end = (
    <div className="ml-4 flex align-content-center">
      {authedUser && (
        <>
          <div className="flex align-items-center justify-content-center mr-2">Hello, <strong className="ml-1">{users[authedUser]?.name}</strong></div>
          <img alt="avatar" src={users[authedUser]?.avatarURL} height="40px" className="mr-2" />
          <Button type="button" label="Logout" onClick={onLogout} />
        </>
      )}
    </div>
  );

  const menu = [
    {label: 'Home', command: () => history.push('/'), disabled: !authedUser},
    {label: 'Login', command: () => history.push('/login'), style: {display: !authedUser ? 'list-item' : 'none'}}
  ];

  return (
    <Menubar model={menu} start={start} end={end} />
  );
}