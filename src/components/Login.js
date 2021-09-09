import { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { sortBy as _sortBy } from 'lodash/fp';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { setAuthedUser } from '../actions';

function getUsers({users}) {
  return _sortBy(user => user.name)(Object.keys(users).map(id => users[id]));
}

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const [user, setUser] = useState(null);

  const header = <img alt="logo" src='images/logo/logo_6.svg' style={{backgroundColor: 'var(--blue-900)'}} />;

  const handleChange = e => {
    setUser(() => e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setAuthedUser(user.id));
    history.push('/');
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
            <Dropdown id="user" name="user" value={user} onChange={handleChange} options={users} optionLabel="name" />
            <label htmlFor="user">Select User</label>
          </span>
        </div>
        <Button type="submit" label="Submit" className="mt-2" disabled={!user} />
      </form>
    </Card>
  );
}