import React from 'react';
import {Container, Title, Text} from './styled';
import Carousel from '../../components/Carousel';

const Home = () => {
  return(
    <div>
      <Carousel/>
      <Container>
        <Title>Bienvenidos</Title>
        <Text>Espacio Artístico de recreacion y enseñanza </Text>
        <br/>
        <Text>Te esperamos para ponernos en movimiento, dar lugar a la creación y vuelo a la imaginación</Text>
      </Container>
    </div>
  )
}

export default Home;