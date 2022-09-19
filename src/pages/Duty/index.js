import { Container, Heading } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { fetchDutiesRequest } from 'store/duty/reducer';
import { selectDuties, selectStatus } from 'store/duty/selector';
import { useEffect } from 'react';
import { selectUser } from 'store/session/selector';
import LoadingPage from 'components/LoadingPage';
import AdminDuty from './AdminDuty';
import UserDuty from './UserDuty';

const Duty = ({
  duties, onMount, sessionUser, status,
}) => {
  useEffect(() => {
    onMount();
  }, []);
  return (
    <Container minW="100%" alignItems="center" display="flex" h="100%" p={5} flexDirection="column">
      <Heading fontSize={50} color="pink.300" mb={5}>Aranceles</Heading>
      {status.isFetched && sessionUser.role === 'admin' && <AdminDuty duties={duties} /> }
      {status.isFetched && !sessionUser.role && <UserDuty duties={duties} />}
      {status.isFetching && <LoadingPage />}
    </Container>
  );
};

export default connect(
  state => ({ duties: selectDuties(state), sessionUser: selectUser(state), status: selectStatus(state) }),
  { onMount: fetchDutiesRequest },
)(Duty);
