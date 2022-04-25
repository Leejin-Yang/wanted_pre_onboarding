import React, { useState } from 'react';
import { Container, ToggleBall, ToggleSpan } from './style';
import { TOGGLE_DATA } from '../../constants/data';

const Toggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container isClicked={isClicked} onClick={handleToggle}>
      <ToggleBall isClicked={isClicked}></ToggleBall>
      {TOGGLE_DATA.map((data, index) => (
        <ToggleSpan key={index}>{data}</ToggleSpan>
      ))}
    </Container>
  );
};

export default Toggle;
