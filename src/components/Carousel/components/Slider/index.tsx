/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import { Container } from './styles';

const Slider = ({ children }: any) => (
  <Container>
    <SlickSlider
      {...{
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
