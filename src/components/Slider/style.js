import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;
  position: relative;
`;

const ValueWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 360px;
  height: 60px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid #adb5bd;

  & > span:first-of-type {
    font-size: 1.2rem;
    font-weight: bold;
    color: #495057;
  }

  & > span:last-of-type {
    font-size: 0.8rem;
    margin: 0 1.2rem;
    color: #868e96;
  }
`;

const SliderWrapper = styled.div`
  margin: 0.8rem 0;
  width: 360px;
  position: relative;
`;

const RangeBar = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 6px;
  background: ${({ value }) =>
    `linear-gradient(to right, #ff922b 0%, #ff922b ${value}%, #dee2e6 ${value}%, #dee2e6 100%)`};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    background: #ff922b;
    border: 2px solid #868e96;
    border-radius: 50%;
  }
`;

const MarkerWrapper = styled.div`
  display: grid;
  grid-template-columns: 52px 82px 89px 84px 53px;
  width: 100%;
  position: absolute;
  top: 40%;
  z-index: -1;

  & > div:first-of-type {
    justify-self: start;
  }

  & > div:last-of-type {
    justify-self: end;
  }
`;

const Marker = styled.div`
  width: 12px;
  height: 12px;
  justify-self: center;
  background-color: ${(props) => (props.isColored ? '#ff922b' : '#dee2e6')};
  border-radius: 50%;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 50px;
  width: 100%;
  position: relative;

  & > button {
    width: 36px;
    height: 20px;
    font-size: 0.7rem;
    justify-self: center;
    color: #495057;
    background-color: #f8f9fa;
    border: 1px solid #adb5bd;
    border-radius: 12px;
    cursor: pointer;
  }

  & > button:first-of-type {
    justify-self: start;
  }

  & > button:last-of-type {
    justify-self: end;
  }
`;

export {
  Container,
  ValueWrapper,
  SliderWrapper,
  RangeBar,
  MarkerWrapper,
  Marker,
  ButtonWrapper,
};
