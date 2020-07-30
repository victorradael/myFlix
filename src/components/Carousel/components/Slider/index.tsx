/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNodeArray, ReactElement } from "react";
import SlickSlider from "react-slick";

import { Container } from "./styles";

interface ISliderProps {
  children: ReactElement<any>;
}

const Slider: React.FC<ISliderProps> = ({ children }) => (
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
