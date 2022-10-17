import logo from 'assets/logo.png';
import { connect } from 'react-redux';
import { selectToken } from 'store/session/selector';
import {
  Button, HStack, Image, Stack, Wrap,
} from '@chakra-ui/react';
import { push } from 'redux-first-history';
import { logoutRequest } from 'store/session/reducer';
import { NavLink } from 'components';

const Header = ({ logout, goToLogin, withSession }) => (
  <HStack id="header" w="100%">
    <Image src={logo} alt="logo" width={150} height={100} />
    <Wrap flex={1}>
      <NavLink to="/" label="Inicio" />
      <NavLink to="/timetable" label="Horarios" />
      <NavLink to="/duty" label="Aranceles" />
      <NavLink to="/inscription" label="Formulario de Inscripción" />
      <NavLink to="/protocol" label="Protocolo" />
      <NavLink to="/spaces" label="Nuestro Espacio" />
    </Wrap>
    <Stack pr={5}>
      {withSession
        ? <Button variant="rounded" onClick={logout}>Salir</Button>
        : <Button variant="rounded" onClick={goToLogin}>Ingresar</Button>}
    </Stack>
  </HStack>
);

export default connect(
  state => ({ status: selectToken(state) }),
  dispatch => ({ logout: () => dispatch(logoutRequest()), goToLogin: () => dispatch(push('/Login')) }),
)(Header);
