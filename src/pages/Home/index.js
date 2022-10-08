import { Container } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { fetchHomesRequest } from 'store/home/reducer';
import { selectHomes, selectStatus } from 'store/home/selector';
import { useEffect } from 'react';
import { selectUser } from 'store/session/selector';
import LoadingPage from 'components/LoadingPage';
import UserHome from './User';

const Home = ({
  homes, onMount, sessionUser, status,
}) => {
  console.log('index', homes);
  useEffect(() => {
    onMount();
  }, []);
  return (
    <Container minW="100%" alignItems="center" display="flex" h="100%" p={5} flexDirection="column">
      {status.isFetched && !sessionUser.role && <UserHome homes={homes} />}
      {status.isFetching && <LoadingPage />}
    </Container>
  );
};

export default connect(
  state => ({ homes: selectHomes(state), sessionUser: selectUser(state), status: selectStatus(state) }),
  { onMount: fetchHomesRequest },
)(Home);
