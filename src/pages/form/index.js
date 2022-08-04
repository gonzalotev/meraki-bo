import React from 'react';
import {Container, Title, Input, Button} from "./styled";

function Form() {
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
      </Container>
    </div>
  )
}

export default Form;