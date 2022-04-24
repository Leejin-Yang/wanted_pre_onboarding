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

const Dropdown = () => {
  const countries = [
    'All Countries 🌏',
    'South Korea 🇰🇷',
    'Argentina 🇦🇷',
    'Canada 🇨🇦',
    'France 🇫🇷',
    'Germany 🇩🇪',
    'Mexico 🇲🇽',
    'Netherlands 🇳🇱',
    'Spain 🇪🇸',
    'Ukraine 🇺🇦',
    'USA 🇺🇸',
  ];
  const [country, setCountry] = useState('All Countries 🌏');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentData, setCurrentData] = useState(countries);

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

    setCurrentData(filterData(countries, searchWord));
  };

  return (
    <Container>
      <SelectedWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            {currentData.map((country, index) => (
              <li key={index} data-country={country} onClick={selectCountry}>
                {country}
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
