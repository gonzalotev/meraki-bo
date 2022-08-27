import { useSelector } from 'react-redux';
import { getProtocol } from '../../store/protocol/selector';

const Protocol = () => {
  const protocol = useSelector(getProtocol);

  console.log(protocol);
  return (
    <div>
      <h1>Protocolo</h1>
    </div>
  );
};

export default Protocol;
