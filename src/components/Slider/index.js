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

const Slider = () => {
  const [value, setValue] = useState(1);
  const percents = [1, 25, 50, 75, 100];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clickButton = (e) => {
    const { percent } = e.target.dataset;
    setValue(percent);
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
          {percents.map((percent, index) => (
            <Marker key={index} isColored={value >= percent}></Marker>
          ))}
        </MarkerWrapper>
      </SliderWrapper>
      <ButtonWrapper>
        {percents.map((percent, index) => (
          <button key={index} data-percent={percent} onClick={clickButton}>
            {percent}%
          </button>
        ))}
      </ButtonWrapper>
    </Container>
  );
};

export default Slider;
