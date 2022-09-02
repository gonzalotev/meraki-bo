import { Carousel } from '../../components';
import {
  Container, Title, Text, Content,
} from './styled';

import meraki0 from './assets/meraki0.jpg';
import meraki1 from './assets/meraki1.jpg';
import meraki2 from './assets/meraki2.png';
import meraki3 from './assets/meraki3.jpg';

const imagesMeraki = [
  {
    id: 0,
    src: meraki0,
  },
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
];

const OurSpace = () => (
  <Container>
    <Carousel images={imagesMeraki} />
    <Content>
      <Title>Nuestro Espacio</Title>
      <Text>Espacio Artístico de recreacion y enseñanza </Text>
      <br />
      <Text>
        Te esperamos para ponernos en movimiento, dar lugar a la creación y vuelo a la imaginación
      </Text>
    </Content>
  </Container>
);

export default OurSpace;
