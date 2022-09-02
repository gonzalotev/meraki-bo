// eslint-disable-next-line import/named
import {
  Container, NavBar, NavLink, Logo, NavLogin,
} from './styled';
import logomeraki from '../../assets/merakilogo.jpeg';

const Header = () => (
  <Container>
    <Logo src={logomeraki} alt="logo" />
    <NavBar>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/Horarios">Horarios</NavLink>
      <NavLink to="/Aranceles">Aranceles</NavLink>
      <NavLink to="/FormularioDeInscripcion">Formulario de Inscripcion</NavLink>
      <NavLink to="/Protocolo">Protocolo</NavLink>
      <NavLink to="/NuestroEspacio">Nuestro Espacio</NavLink>
      <NavLink to="/Contacto">Contacto</NavLink>
    </NavBar>
    <NavLogin to="/Ingresar">Ingresar</NavLogin>
  </Container>
);

export default Header;
