import { useState } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { setAuthedUser } from '../actions';
import { getUsers } from '../utils/helper';
import UserAvatar from './_common/UserAvatar';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const location = useLocation();
  const [user, setUser] = useState(null);

  const redirectPath = () => {
    if (location.search) {
      const redirects = location.search
        .replace('?', '')
        .split('&')
        .filter(part => part.startsWith('redirect='))
        .map(part => part.replace('redirect=', ''));
      return redirects.length > 0 ? redirects[0] : '/';
    };

    return '/';
  };

  const handleChange = e => {
    setUser(() => e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setAuthedUser(user.id));
    history.push(redirectPath());
  };

  const header = <img alt="logo" src='/images/logo/logo.svg' style={{backgroundColor: 'var(--blue-900)'}} />;

  const userOptionTemplate = (user) => {
    return (
      <div className="flex align-items-center">
        <UserAvatar url={user.avatarURL} height="30px" className="mr-2" />
        <div>{user.name}</div>
      </div>
    );
  };

  const selectedUserTemplate = (user) => {
    if (user) {
      return userOptionTemplate(user);
    }

    return <span>Select User</span>;
  };

  return (
    <Card
      title="Welcome to the Would You Rather game"
      subTitle="Please sign in to continue"
      header={header}
      style={{width: '25rem'}}
    >
      <form onSubmit={handleSubmit} className="p-fluid">
        <div className="p-field mb-1">
          <span className="p-float-label">
            <Dropdown
              id="user"
              name="user"
              value={user}
              onChange={handleChange}
              options={users}
              optionLabel="name"
              valueTemplate={selectedUserTemplate}
              itemTemplate={userOptionTemplate}
            />
            <label htmlFor="user">Select User</label>
          </span>
        </div>
        <Button
          type="submit"
          label="Submit"
          className="mt-2"
          disabled={!user}
        />
      </form>
    </Card>
  );
}
