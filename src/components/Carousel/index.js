import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { Image, Stack } from '@chakra-ui/react';

const getImages = (images) => (images ? images.map((image) => (
  <Image
    key={image.id}
    src={image.url}
    alt={image.name}
    objectFit="contain"
  />
)) : <p>No hay imágenes</p>);

const Carousel = ({ images = [], ...props }) => (
  <Stack maxW={600} minW={{ base: '100%', lg: 600 }} {...props}>
    <ResponsiveCarousel autoPlay infiniteLoop interval={4000}>
      {getImages(images)}
    </ResponsiveCarousel>
  </Stack>
);

export default Carousel;
