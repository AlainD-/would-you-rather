import { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function InfoMessage({text}) {
  const infoMessage = useRef(null);

  useEffect(() => {
    const message = {severity: 'info', detail: text, sticky: true, closable: false};
    if (infoMessage?.current) {
      infoMessage.current.show(message);
    }
  }, [text]);

  return <Messages ref={infoMessage} />;
}
