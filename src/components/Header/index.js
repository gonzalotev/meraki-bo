import logomeraki from 'assets/merakilogo.png';
import { connect } from 'react-redux';
import { selectToken } from 'store/session/selector';
import { getToken } from 'services/storage';
import { Button } from '@chakra-ui/react';
import { push } from 'redux-first-history';
import { logoutRequest } from 'store/session/reducer';
import {
  Container, NavBar, NavLink, Logo,
} from './styled';

const Header = ({ logout, goToLogin }) => {
  const token = getToken();
  return (
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
      {!token && <Button variant="rounded" onClick={goToLogin}>Ingresar</Button>}
      {token && <Button variant="rounded" onClick={logout}>Log out</Button>}
    </Container>
  );
};

export default connect(
  state => ({ status: selectToken(state) }),
  dispatch => ({ logout: () => dispatch(logoutRequest()), goToLogin: () => dispatch(push('/Ingresar')) }),
)(Header);
