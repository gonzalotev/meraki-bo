import { Container, Wrapper, NavBar, NavLink, Title, Logo, NavLogin } from './styled';
import logomeraki from './merakilogo.jpeg';

const Header = () => {
  return (
    <Container>
      <Logo src={logomeraki} alt='logo' />
      <Wrapper>
        <Title to='/'>Meraki Espacio Artistico</Title>
        <NavBar>
          <NavLink to='/'>Inicio</NavLink>
          <NavLink to='/Horarios'>Horarios</NavLink>
          <NavLink to='/Aranceles'>Aranceles</NavLink>
          <NavLink to='/FormularioDeInscripcion'>Formulario de Inscripcion</NavLink>
          <NavLink to='/Protocolo'>Protocolo</NavLink>
          <NavLink to='/NuestroEspacio'>Nuestro Espacio</NavLink>
          <NavLink to='/Contacto'>Contacto</NavLink>
          <NavLogin to='/Ingresar'>Ingresar</NavLogin>
        </NavBar>
      </Wrapper>
    </Container>
  );
};

export default Header;
