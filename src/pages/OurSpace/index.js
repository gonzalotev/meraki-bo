import { Container, Heading } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { selectResource } from 'store/resource/selector';
import { selectStatus, selectUser } from 'store/session/selector';
import { useEffect } from 'react';
import LoadingPage from 'components/LoadingPage';
import { fetchResourceRequest } from 'store/resource/reducer';
import { resourceTypes } from 'constant';
import { ResourceList, ResourcePage } from 'components';

const OurSpace = ({
  resource, onMount, sessionUser, status,
}) => {
  useEffect(() => {
    onMount(resourceTypes.OUR_SPACES);
  }, []);
  return (
    <Container minW="100%" alignItems="center" display="flex" h="100%" px={5} flexDirection="column">
      <Heading fontSize={50} color="pink.300" mb={2}>Nuestro Espacio</Heading>
      {sessionUser.role === 'admin' && (
        <ResourceList
          resource={resource}
          type={resourceTypes.OUR_SPACES}
        />
      ) }
      {!sessionUser.role && <ResourcePage resource={resource} />}
      {status.isFetching && <LoadingPage />}
    </Container>
  );
};

export default connect(
  state => ({ resource: selectResource(state, 'ourSpaces'), sessionUser: selectUser(state), status: selectStatus(state) }),
  { onMount: fetchResourceRequest },
)(OurSpace);
