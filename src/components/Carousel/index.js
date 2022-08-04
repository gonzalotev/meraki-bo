import React from 'react';
import Slider from "infinite-react-carousel";
import {Container, ContainerImg} from "./styled";

import meraki1 from './meraki1.jpg';
import meraki2 from './meraki2.jpg';
import meraki3 from './meraki3.jpg';
import meraki4 from './meraki4.jpg';
import meraki5 from './meraki5.jpg';
import meraki6 from './meraki6.jpg';

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    virtualList: true,
    arrows:false,
  }

  return(
    <Container>
      <Slider {...settings}>
          <ContainerImg src={meraki1} alt="meraki1" />
          <ContainerImg src={meraki2} alt="meraki2" />
          <ContainerImg src={meraki3} alt="meraki3" />
          <ContainerImg src={meraki4} alt="meraki4" />
          <ContainerImg src={meraki5} alt="meraki5" />
          <ContainerImg src={meraki6} alt="meraki6" />
      </Slider>
    </Container>
  )
}

export default Carousel;