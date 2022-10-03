import logomeraki from 'assets/merakilogo.png';
import { connect } from 'react-redux';
import { selectToken } from 'store/session/selector';
import { Button, HStack } from '@chakra-ui/react';
import { push } from 'redux-first-history';
import { logoutRequest } from 'store/session/reducer';
import {
  Container, NavBar, NavLink, Logo,
} from './styled';

const Header = ({ logout, goToLogin, withSession }) => (
  <Container>
    <Logo src={logomeraki} alt="logo" />
    <NavBar>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/timetable">Horarios</NavLink>
      <NavLink to="/duty">Aranceles</NavLink>
      <NavLink to="/inscription">Formulario de Inscripción</NavLink>
      <NavLink to="/protocol">Protocolo</NavLink>
      <NavLink to="/spaces">Nuestro Espacio</NavLink>
    </NavBar>
    <HStack pr={5}>
      {withSession
        ? <Button variant="rounded" onClick={logout}>Salir</Button>
        : <Button variant="rounded" onClick={goToLogin}>Ingresar</Button>}
    </HStack>
  </Container>
);

export default connect(
  state => ({ status: selectToken(state) }),
  dispatch => ({ logout: () => dispatch(logoutRequest()), goToLogin: () => dispatch(push('/Login')) }),
)(Header);
