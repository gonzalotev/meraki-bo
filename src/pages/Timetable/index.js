import { Container } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { fetchTimetablesRequest } from 'store/timetable/reducer';
import { selectTimetables, selectStatus } from 'store/timetable/selector';
import { useEffect } from 'react';
import { selectUser } from 'store/session/selector';
import LoadingPage from 'components/LoadingPage';
import { Title } from 'components';
import AdminTimetable from './Admin/TimetableList';
import UserTimetable from './User/TimetableList';

const Timetable = ({
  timetables, onMount, sessionUser, status,
}) => {
  useEffect(() => {
    onMount();
  }, []);
  return (
    <Container>
      <Title title="Horarios" />
      {sessionUser.role === 'admin' && <AdminTimetable timetables={timetables} /> }
      {!sessionUser.role && <UserTimetable timetables={timetables} /> }
      {status.isFetching && <LoadingPage />}
    </Container>
  );
};

export default connect(
  state => ({ timetables: selectTimetables(state), sessionUser: selectUser(state), status: selectStatus(state) }),
  { onMount: fetchTimetablesRequest },
)(Timetable);
