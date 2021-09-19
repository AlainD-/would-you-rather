import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import { setErrorMessage } from '../actions';

export default function ErrorMessage() {
  const toast = useRef(null);
  const dispatch = useDispatch();
  const errorMessage = useSelector(({error}) => error);

  const clear = () => {
    if (toast) {
      toast.current.clear();
      dispatch(setErrorMessage(null));
    }
  };

  useEffect(() => {
    if (errorMessage && toast) {
      toast.current.show({
        severity:'error',
        summary: 'Error',
        detail: errorMessage,
        life: 3000
      });
    } else if (toast) {
      toast.current.clear();
      dispatch(setErrorMessage(null));
    }
  }, [errorMessage, dispatch]);

  return (
    <Toast ref={toast} onHide={clear} />
  );
};
