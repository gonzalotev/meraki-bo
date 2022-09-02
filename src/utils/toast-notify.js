import { toast } from 'react-toastify';

const notify = (message = '', type = 'error') => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
    style: {
      right: '280px', top: '40px', height: '150px', width: '580px',
    },
    autoClose: 5000,
  });
};

export default notify;
