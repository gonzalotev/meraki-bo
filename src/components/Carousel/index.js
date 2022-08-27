import Slider from 'infinite-react-carousel';
import { Container, ContainerImg } from './styled';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    virtualList: true,
    arrows: false,
  };

  return (
    <Container>
      <Slider {...settings}>
        {images.map((image) => (
          <ContainerImg key={image.id} src={image.src} alt='meraki' />
        ))}
      </Slider>
    </Container>
  );
};

Carousel.propTypes = {
  images: PropTypes.func.isRequired,
};

export default Carousel;
