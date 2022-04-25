import React, { useState } from 'react';
import { Container, TabMenu, ActiveBar } from './style';
import { TAB_DATA } from '../../constants/data';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const position = activeTab * 150;

  const clickTab = (e) => {
    setActiveTab(Number(e.target.id));
  };

  return (
    <Container>
      {TAB_DATA.map((menu, index) => (
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
