import React from 'react';
import { Container } from './style';

const Box = ({ name, children }) => {
  return (
    <Container>
      <h1>{name}</h1>
      {children}
    </Container>
  );
};

export default Box;
