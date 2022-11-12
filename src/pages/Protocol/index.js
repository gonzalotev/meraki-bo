import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Container } from '@chakra-ui/react';
import { protocolFetchRequest } from 'store/protocol/reducer';
import { selectProtocol } from 'store/protocol/selector';
import { selectUser } from 'store/session/selector';
import Admin from './Admin/ProtocolEditor';
import User from './User';

const Protocol = ({ sessionUser, protocol }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(protocolFetchRequest());
  }, []);
  return (
    <Container>
      {sessionUser.role === 'admin' && <Admin protocol={protocol} />}
      {!Object.keys(sessionUser).length && <User protocol={protocol} />}
    </Container>
  );
};

export default connect(
  state => ({ protocol: selectProtocol(state), sessionUser: selectUser(state) }),
)(Protocol);
