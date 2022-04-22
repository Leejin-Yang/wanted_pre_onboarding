import React, { useState } from 'react';
import { Container, ToggleBall, ToggleSpan } from './style';

const Toggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container isClicked={isClicked} onClick={handleToggle}>
      <ToggleBall isClicked={isClicked}></ToggleBall>
      <ToggleSpan>기본</ToggleSpan>
      <ToggleSpan>상세</ToggleSpan>
    </Container>
  );
};

export default Toggle;
