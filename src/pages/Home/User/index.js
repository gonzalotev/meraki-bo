import Carousel from 'components/Carousel';
import {
  Container, Title, Text, Content,
} from './styled';

const UserHome = ({ homes }) => {
  console.log(homes);
  return (
    <Container style={{ marginTop: '100px' }}>
      <Carousel images={homes} />
      <Content>
        <Title>Bienvenidos</Title>
        <Text>Espacio Artístico de recreacion y enseñanza </Text>
        <br />
        <Text>
          Te esperamos para ponernos en movimiento, dar lugar a la creación y vuelo a la imaginación
        </Text>
      </Content>
    </Container>
  );
};

export default UserHome;
