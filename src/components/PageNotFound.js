import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Messages } from 'primereact/messages';

export default function PageNotFound() {
  const notFoundMessage = useRef(null);

  useEffect(() => {
    const detail = <><span className="mr-2">The requested page does not exist!</span> <Link to="/">Try again.</Link></>;
    const message = {severity: 'error', detail, sticky: true, closable: false};
    if (notFoundMessage?.current) {
      notFoundMessage.current.show(message);
    }
  }, []);

  return (
    <Card title="Error 404">
      <Messages ref={notFoundMessage} />
    </Card>
  );
}
