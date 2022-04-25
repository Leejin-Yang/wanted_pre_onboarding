import styled from 'styled-components';
import { COLOR } from '../../constants/style';

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  width: 300px;
  height: 45px;
  border-radius: 45px;
  background-color: ${COLOR.BACKGROUND_PRIMARY};
  position: relative;

  & > span:first-of-type {
    color: ${(props) =>
      props.isClicked ? COLOR.TEXT_SECONDARY : COLOR.TEXT_PRIMARY};
  }

  & > span:last-of-type {
    color: ${(props) =>
      props.isClicked ? COLOR.TEXT_PRIMARY : COLOR.TEXT_SECONDARY};
  }
`;

const ToggleBall = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 147px;
  height: 39px;
  background-color: ${COLOR.BACKGROUND_WHITE};
  border-radius: 39px;
  transform: translateX(${(props) => (props.isClicked ? '100%' : '0%')});
  transition: 0.3s;
`;

const ToggleSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  font-size: 1.1rem;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
`;

export { Container, ToggleBall, ToggleSpan };
