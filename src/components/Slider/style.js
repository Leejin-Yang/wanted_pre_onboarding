import styled from 'styled-components';
import { COLOR } from '../../constants/style';

const Container = styled.div`
  width: 360px;
  margin-top: 50px;
  position: relative;
`;

const ValueWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${COLOR.BACKGROUND_WHITE};
  border-radius: 3px;
  border: 1px solid ${COLOR.BORDER};

  & > span:first-of-type {
    font-size: 1.2rem;
    font-weight: bold;
  }

  & > span:last-of-type {
    font-size: 0.8rem;
    margin: 0 1.2rem;
    color: ${COLOR.TEXT_SECONDARY};
  }
`;

const SliderWrapper = styled.div`
  margin: 0.8rem 0;
  width: 100%;
  position: relative;
`;

const RangeBar = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 6px;
  background: ${({ value }) =>
    `linear-gradient(to right, ${COLOR.POINT_ORANGE} 0%, ${COLOR.POINT_ORANGE} ${value}%, ${COLOR.BACKGROUND_PRIMARY} ${value}%, ${COLOR.BACKGROUND_PRIMARY} 100%)`};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    background: ${COLOR.POINT_ORANGE};
    border: 1.5px solid ${COLOR.BORDER};
    border-radius: 50%;
  }
`;

const MarkerWrapper = styled.div`
  display: grid;
  grid-template-columns: 51px 82px 90px 84px 53px;
  width: 100%;
  position: absolute;
  top: 36%;
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
  background-color: ${(props) =>
    props.isColored ? COLOR.POINT_ORANGE : COLOR.BACKGROUND_PRIMARY};
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
    color: ${COLOR.TEXT_SECONDARY};
    background-color: ${COLOR.BACKGROUND_SECONDARY};
    border: 1px solid ${COLOR.BORDER};
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
