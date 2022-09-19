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
      <NavLink to="/Horarios">Horarios</NavLink>
      <NavLink to="/Aranceles">Aranceles</NavLink>
      <NavLink to="/FormularioDeInscripcion">Formulario de Inscripcion</NavLink>
      <NavLink to="/Protocolo">Protocolo</NavLink>
      <NavLink to="/NuestroEspacio">Nuestro Espacio</NavLink>
    </NavBar>
    <HStack pr={5}>
      {withSession
        ? <Button variant="rounded" onClick={logout}>Log out</Button>
        : <Button variant="rounded" onClick={goToLogin}>Ingresar</Button>}
    </HStack>
  </Container>
);

export default connect(
  state => ({ status: selectToken(state) }),
  dispatch => ({ logout: () => dispatch(logoutRequest()), goToLogin: () => dispatch(push('/Ingresar')) }),
)(Header);
