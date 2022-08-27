import { Container, Title, Text } from './styled';
import Carousel from '../../components/Carousel';

import meraki1 from './assests/meraki1.jpg';
import meraki2 from './assests/meraki2.jpg';
import meraki3 from './assests/meraki3.jpg';
import meraki4 from './assests/meraki4.jpg';
import meraki5 from './assests/meraki5.jpg';
import meraki6 from './assests/meraki6.jpg';

const imagesMeraki = [
  {
    id: 1,
    src: meraki1,
  },
  {
    id: 2,
    src: meraki2,
  },
  {
    id: 3,
    src: meraki3,
  },
  {
    id: 4,
    src: meraki4,
  },
  {
    id: 5,
    src: meraki5,
  },
  {
    id: 6,
    src: meraki6,
  },
];

const Home = () => {
  return (
    <div>
      <Carousel images={imagesMeraki} />
      <Container>
        <Title>Bienvenidos</Title>
        <Text>Espacio Artístico de recreacion y enseñanza </Text>
        <br />
        <Text>
          Te esperamos para ponernos en movimiento, dar lugar a la creación y vuelo a la imaginación
        </Text>
      </Container>
    </div>
  );
};

export default Home;
