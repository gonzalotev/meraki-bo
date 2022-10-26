import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { Image, Stack } from '@chakra-ui/react';

const getImages = (images) => (images ? images.map((image) => (
  <Image
    key={image.id}
    src={image.url}
    alt={image.name}
    objectFit="contain"
  />
)) : <p>no hay imágenes</p>);

const Carousel = ({ images, ...props }) => (
  <Stack maxW={600} minW={{ base: '100%', lg: 600 }} {...props}>
    <ResponsiveCarousel autoPlay infiniteLoop interval={4000}>
      {getImages(images)}
    </ResponsiveCarousel>
  </Stack>
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
