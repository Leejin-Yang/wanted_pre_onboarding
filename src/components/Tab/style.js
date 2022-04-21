import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  border-bottom: 3px solid #ced4da;
  position: relative;
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 50px;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#495057' : '#ced4da')};
`;

const ActiveBar = styled.div`
  position: absolute;
  top: 50px;
  width: 180px;
  height: 3px;
  background-color: #ff922b;
  transform: translateX(${(props) => `${props.position}px`});
  transition: 0.3s ease-out;
`;

export { Container, TabMenu, ActiveBar };
