import { Container } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { fetchDutiesRequest } from 'store/duty/reducer';
import { selectDuties, selectStatus, selectEnrollment } from 'store/duty/selector';
import { useEffect } from 'react';
import { selectUser } from 'store/session/selector';
import { Title, LoadingPage } from 'components';
import AdminDuty from './Admin/DutyList';
import UserDuty from './User/DutyList';

const Duty = ({
  duties, onMount, sessionUser, status, enrollment,
}) => {
  useEffect(() => {
    onMount();
  }, []);
  return (
    <Container>
      <Title title="Aranceles" />
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
