import React from 'react';
import {Container, Title, Input, Button, Resetpass} from "./styled";

function Login() {
  return(
    <div>
      <Container>
        <Title>Bienvenido</Title>
        <Input
          id="user"
          type="text"
          placeholder="Usuario"
        />
        <Input
          id="password"
          type="password"
          placeholder="Contraseña"
        />
        <Button type="submit">Ingresar</Button>
        <Resetpass to="/Recuperar-Contraseña">¿Perdiste tu contraseña? </Resetpass>
      </Container>
    </div>
  )
}

export default Login;