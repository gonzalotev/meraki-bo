import React from 'react';
import {Container, Wrapper, NavBar, NavLink, Title} from './styled';

const Header = () => {
  return(
    <Container>
      <Wrapper>
        <Title>Meraki Espacio Artistico</Title>
        <NavBar>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/Horarios">Horarios</NavLink>
          <NavLink to="/Aranceles">Aranceles</NavLink>
          <NavLink to="/FormularioDeInscripcion">Formulario de Inscripcion</NavLink>
          <NavLink to="/Protocolo">Protocolo</NavLink>
          <NavLink to="/NuestroEspacio">Nuestro Espacio</NavLink>
          <NavLink to="/Contacto">Contacto</NavLink>
        </NavBar>
      </Wrapper>
    </Container>
  )
}

export default Header;