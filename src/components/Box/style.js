import styled from 'styled-components';
import { COLOR } from '../../constants/style';

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, minmax(20px, auto));
  row-gap: 60px;
  place-items: center;
  width: 600px;
  min-height: 300px;
  border: 2px solid ${COLOR.BORDER};
  margin: 30px 0;
  padding: 2rem;

  & > h1 {
    font-size: 1.2rem;
  }
`;

export { Container };
