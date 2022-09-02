import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { Container, ContainerImg } from './styled';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const _Carousel = ({ images }) => (
  <Container>
    <Carousel autoPlay infiniteLoop interval={4000}>
      {images ? images.map((image) => (
        <ContainerImg key={image.id} src={image.src} alt="meraki" />
      )) : <p>no hay imagenes</p>}
    </Carousel>
  </Container>
);

_Carousel.propTypes = {
  images: PropTypes.func.isRequired,
};

export default _Carousel;
