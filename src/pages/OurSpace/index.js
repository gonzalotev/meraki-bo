import { Container } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { selectResource } from 'store/resource/selector';
import { selectStatus, selectUser } from 'store/session/selector';
import { useEffect } from 'react';
import LoadingPage from 'components/LoadingPage';
import { fetchResourceRequest } from 'store/resource/reducer';
import { resourceTypes } from 'constant';
import { ResourceList, ResourcePage, Title } from 'components';

const OurSpace = ({
  resource, onMount, sessionUser, status,
}) => {
  useEffect(() => {
    onMount(resourceTypes.OUR_SPACES);
  }, []);
  return (
    <Container>
      <Title title="Nuestro Espacio" />
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
