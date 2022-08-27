import { Container, Wrapper, Items, Item } from './styled';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Items>
          <Item>DOMICILIO</Item>
          <Item>Coronel Dominguez 725 - Villa Madero</Item>
        </Items>
        <Items>
          <Item>TELÉFONO</Item>
          <Item>1123949573</Item>
        </Items>
        <Items>
          <Item>INSTAGRAM</Item>
          <Item>@meraki.espacioartistico</Item>
        </Items>
        <Items>
          <Item>FACEBOOK</Item>
          <Item>meraki espacio artistico</Item>
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Footer;
