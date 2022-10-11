import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { Container, ContainerImg } from './styled';

const getImages = (images) => (images ? images.map((image) => (
  <ContainerImg
    key={image.id}
    src={image.url}
    alt={image.name}
  />
)) : <p>no hay imágenes</p>);

const Carousel = ({ images }) => (
  <Container>
    <ResponsiveCarousel autoPlay infiniteLoop interval={4000}>
      {getImages(images)}
    </ResponsiveCarousel>
  </Container>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    url: PropTypes.string,
    name: PropTypes.string,
  })),
};

Carousel.defaultProps = {
  images: [],
};

export default Carousel;
