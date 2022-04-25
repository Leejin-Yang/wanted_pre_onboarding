import React, { useState } from 'react';
import {
  Container,
  MenuWrapper,
  SelectedWrapper,
  SearchForm,
  SearchIcon,
  MenuList,
  NoResultMsg,
} from './style';
import { DROPDOWN_DATA } from '../../constants/data';

const Dropdown = () => {
  const [country, setCountry] = useState('All Countries 🌏');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentData, setCurrentData] = useState(DROPDOWN_DATA);

  const clickSelected = () => {
    setIsMenuOpen(!isMenuOpen);
    setCurrentData(DROPDOWN_DATA);
  };

  const selectCountry = (e) => {
    const { country } = e.target.dataset;
    setCountry(country);
    setIsMenuOpen(false);
  };

  const filterData = (data, word) => {
    if (!word) {
      return data;
    }

    const newData = data.filter((country) =>
      country.toLowerCase().startsWith(word.toLowerCase())
    );

    return newData;
  };

  const handleSearch = (e) => {
    const searchWord = e.target.value;

    setCurrentData(filterData(DROPDOWN_DATA, searchWord));
  };

  return (
    <Container>
      <SelectedWrapper onClick={clickSelected}>
        <span>{country}</span>
        <button>{isMenuOpen ? '▲' : '▼'}</button>
      </SelectedWrapper>
      {isMenuOpen && (
        <MenuWrapper>
          <SearchForm>
            <SearchIcon>👀</SearchIcon>
            <input
              type='text'
              placeholder='Search Country'
              autoFocus
              onChange={handleSearch}
            ></input>
          </SearchForm>
          <MenuList>
            {currentData.map((data, index) => (
              <li key={index} data-country={data} onClick={selectCountry}>
                {data}
              </li>
            ))}
            {!currentData.length && <NoResultMsg>No Result</NoResultMsg>}
          </MenuList>
        </MenuWrapper>
      )}
    </Container>
  );
};

export default Dropdown;
