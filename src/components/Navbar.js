import { TabMenu } from 'primereact/tabmenu';
import { useHistory } from 'react-router';

export default function NavBar() {
  const history = useHistory();

  const menu = [
    {label: 'Home', command: () => history.push('/')},
    {label: 'Not Found', command: () => history.push('/not-found')},
    {label: 'Login', command: () => history.push('/login')}
  ];

  return (
    <TabMenu model={menu} />
  );
}
