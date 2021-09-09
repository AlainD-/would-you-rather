import { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';

export default function Login() {
  const header = <img alt="logo" src='images/logo/logo_6.svg' style={{backgroundColor: 'var(--blue-900)'}} />;
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]); // @todo should be get from the store

  const handleChange = e => {
    setUser(() => e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
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
        <Button type="submit" label="Submit" className="mt-2" />
      </form>
    </Card>
  );
}
