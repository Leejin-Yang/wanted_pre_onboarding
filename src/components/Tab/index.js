import React, { useState } from 'react';
import { Container, TabMenu, ActiveBar } from './style';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabMenus = ['감자', '고구마', '카레라이스'];
  const position = activeTab * 180;

  const clickTab = (e) => {
    setActiveTab(Number(e.target.id));
  };

  return (
    <Container>
      {tabMenus.map((menu, index) => (
        <TabMenu
          key={index}
          id={index}
          isActive={activeTab === index}
          onClick={clickTab}
        >
          {menu}
        </TabMenu>
      ))}
      <ActiveBar position={position}></ActiveBar>
    </Container>
  );
};

export default Tab;
