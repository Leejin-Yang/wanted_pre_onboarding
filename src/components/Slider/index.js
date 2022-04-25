import React, { useState } from 'react';
import {
  Container,
  ValueWrapper,
  SliderWrapper,
  RangeBar,
  MarkerWrapper,
  Marker,
  ButtonWrapper,
} from './style';
import { SLIDER_DATA } from '../../constants/data';

const Slider = () => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clickButton = (e) => {
    const { step } = e.target.dataset;
    setValue(step);
  };

  return (
    <Container>
      <ValueWrapper>
        <span>{value}</span>
        <span>%</span>
      </ValueWrapper>
      <SliderWrapper>
        <RangeBar
          type='range'
          min='1'
          max='100'
          value={value}
          onChange={handleChange}
        ></RangeBar>
        <MarkerWrapper>
          {SLIDER_DATA.map((data, index) => (
            <Marker key={index} isColored={value >= data}></Marker>
          ))}
        </MarkerWrapper>
      </SliderWrapper>
      <ButtonWrapper>
        {SLIDER_DATA.map((data, index) => (
          <button key={index} data-step={data} onClick={clickButton}>
            {data}%
          </button>
        ))}
      </ButtonWrapper>
    </Container>
  );
};

export default Slider;
