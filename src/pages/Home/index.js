import { Container, Heading } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { selectResource } from 'store/resource/selector';
import { selectStatus, selectUser } from 'store/session/selector';
import { useEffect } from 'react';
import LoadingPage from 'components/LoadingPage';
import { fetchResourceRequest } from 'store/resource/reducer';
import { resourceTypes } from 'constant';
import { ResourceList, ResourcePage } from 'components';

const Home = ({
  resource, onMount, sessionUser, status,
}) => {
  useEffect(() => {
    onMount(resourceTypes.HOME);
  }, []);
  return (
    <Container minW="100%" alignItems="center" display="flex" h="100%" p={5} flexDirection="column">
      <Heading fontSize={50} color="pink.300" mb={5}>{sessionUser.role === 'admin' ? 'Inicio' : 'Bienvenidos'}</Heading>
      {sessionUser.role === 'admin' && (
        <ResourceList
          resource={resource}
          type={resourceTypes.HOME}
          origin="/"
        />
      ) }
      {!sessionUser.role && <ResourcePage resource={resource} />}
      {status.isFetching && <LoadingPage />}
    </Container>
  );
};

export default connect(
  state => ({ resource: selectResource(state, 'home'), sessionUser: selectUser(state), status: selectStatus(state) }),
  { onMount: fetchResourceRequest },
)(Home);
