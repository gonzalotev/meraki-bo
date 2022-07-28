import React from 'react';
import Slider from "infinite-react-carousel";
import {Container, ContainerImg} from "./styled";

import batman from './batman.jpg';
import homero from './homeroerotico.jpg';
import js from './js.png';
import react from './react.jpg';
import taza from './taza-javascript.png';
import venom from './venom.png';

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
          <ContainerImg src={batman} alt="batman" />
          <ContainerImg src={homero} alt="homero" />
          <ContainerImg src={js} alt="js" />
          <ContainerImg src={taza} alt="taza" />
          <ContainerImg src={venom} alt="venom" />
          <ContainerImg src={react} alt="react" />
      </Slider>
    </Container>
  )
}

export default Carousel;