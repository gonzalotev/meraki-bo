import { toast } from 'react-toastify';

const notify = (message = '', type = 'error') => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 7000,
  });
};

export default notify;
