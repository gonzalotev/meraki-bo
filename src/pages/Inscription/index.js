import { connect } from 'react-redux';
import { Container } from '@chakra-ui/react';
import { GradiantTitle } from 'components';
import { selectUser } from 'store/session/selector';
import { useEffect } from 'react';
import { fetchTimetablesRequest } from 'store/timetable/reducer';
import User from './User';
import Admin from './Admin';

const InscriptionUser = ({ sessionUser, onMount }) => {
  useEffect(() => {
    onMount();
  }, []);
  return (
    <Container minW="full" alignItems="center" h="100%" justifyContent="center">
      <GradiantTitle title="INSCRIPCIONES" caption="MERAKI - ESPACIO ARTISTICO" />
      {sessionUser.role === 'admin' && <Admin /> }
      {!sessionUser.role && <User />}
    </Container>
  );
};

export default connect(
  (state) => ({ sessionUser: selectUser(state) }),
  { onMount: fetchTimetablesRequest },
)(InscriptionUser);
