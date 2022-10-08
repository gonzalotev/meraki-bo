import { Container, Heading } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { fetchTimetablesRequest } from 'store/timetable/reducer';
import { selectTimetables, selectStatus } from 'store/timetable/selector';
import { useEffect } from 'react';
import { selectUser } from 'store/session/selector';
import LoadingPage from 'components/LoadingPage';
import AdminTimetable from './Admin/TimetableList';

const Timetable = ({
  timetables, onMount, sessionUser, status,
}) => {
  useEffect(() => {
    onMount();
  }, []);
  return (
    <Container minW="100%" alignItems="center" display="flex" h="100%" p={5} flexDirection="column">
      <Heading fontSize={50} color="pink.300" mb={5}>Horarios</Heading>
      {sessionUser.role === 'admin' && <AdminTimetable timetables={timetables} /> }
      {status.isFetching && <LoadingPage />}
    </Container>
  );
};

export default connect(
  state => ({ timetables: selectTimetables(state), sessionUser: selectUser(state), status: selectStatus(state) }),
  { onMount: fetchTimetablesRequest },
)(Timetable);
