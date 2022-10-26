import { Container, Heading } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { fetchDutiesRequest } from 'store/duty/reducer';
import { selectDuties, selectStatus, selectEnrollment } from 'store/duty/selector';
import { useEffect } from 'react';
import { selectUser } from 'store/session/selector';
import LoadingPage from 'components/LoadingPage';
import AdminDuty from './Admin/DutyList';
import UserDuty from './User/DutyList';

const Duty = ({
  duties, onMount, sessionUser, status, enrollment,
}) => {
  useEffect(() => {
    onMount();
  }, []);
  return (
    <Container minW="100%" alignItems="center" display="flex" h="100%" p={5} flexDirection="column">
      <Heading fontSize={50} color="pink.300" mb={5}>Aranceles</Heading>
      {sessionUser.role === 'admin' && <AdminDuty duties={duties} enrollment={enrollment} /> }
      {status.isFetched && !sessionUser.role && <UserDuty duties={duties} enrollment={enrollment} />}
      {status.isFetching && <LoadingPage />}
    </Container>
  );
};

export default connect(
  state => ({
    duties: selectDuties(state),
    enrollment: selectEnrollment(state),
    sessionUser: selectUser(state),
    status: selectStatus(state),
  }),
  { onMount: fetchDutiesRequest },
)(Duty);
