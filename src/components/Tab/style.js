import styled from 'styled-components';
import { COLOR } from '../../constants/style';

const Container = styled.div`
  display: flex;
  width: 450px;
  margin-top: 50px;
  border-bottom: 3px solid ${COLOR.BORDER};
  position: relative;
`;

const TabMenu = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) =>
    props.isActive ? COLOR.TEXT_PRIMARY : COLOR.TEXT_DISABLE};
`;

const ActiveBar = styled.div`
  position: absolute;
  top: 50px;
  width: 150px;
  height: 3px;
  background-color: ${COLOR.POINT_ORANGE};
  transform: translateX(${(props) => `${props.position}px`});
  transition: 0.3s ease-out;
`;

export { Container, TabMenu, ActiveBar };
