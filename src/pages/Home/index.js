import { Container } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { selectResource, selectStatus } from 'store/resource/selector';
import { selectUser } from 'store/session/selector';
import { useEffect } from 'react';
import LoadingPage from 'components/LoadingPage';
import { fetchResourceRequest } from 'store/resource/reducer';
import { resourceTypes } from 'constant';
import { ResourceList, ResourcePage, Title } from 'components';

const Home = ({
  resource, onMount, sessionUser, status,
}) => {
  useEffect(() => {
    onMount(resourceTypes.HOME);
  }, []);
  return (
    <Container>
      {!status.isFetching && status.isFetched && (
        <Title title={sessionUser.role === 'admin' ? 'Inicio' : `${resource.title}`} />
      )}
      {sessionUser.role === 'admin' && (
        <ResourceList
          resource={resource}
          type={resourceTypes.HOME}
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
