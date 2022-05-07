import { useState } from 'react'
import styles from './Dropdown.module.scss'
import { DROPDOWN_DATA } from '../../assets/data'

function Dropdown() {
  const [country, setCountry] = useState('All Countries 🌏')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [filteredData, setFilteredData] = useState(DROPDOWN_DATA)

  const filterData = (data, word) => {
    if (!word) {
      return data
    }

    const filteredData = data.filter((data) => data.toLowerCase().includes(word.toLowerCase()))

    return filteredData
  }

  const handleOpenButtonClick = () => {
    setIsMenuOpen((prev) => !prev)
    setFilteredData(DROPDOWN_DATA)
  }

  const handleCountryClick = (e) => {
    const { country } = e.currentTarget.dataset

    setCountry(country)
    setIsMenuOpen(false)
  }

  const handleSearch = (e) => {
    const searchWord = e.currentTarget.value

    setFilteredData(filterData(DROPDOWN_DATA, searchWord))
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles.selected}>
        <span>{country}</span>
        <button type='button' onClick={handleOpenButtonClick}>
          {isMenuOpen ? '▲' : '▼'}
        </button>
      </div>
      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.searchForm}>
            <span className={styles.searchIcon}>👀</span>
            <input
              type='text'
              placeholder='Search Country'
              onChange={handleSearch}
              autoCapitalize='off'
              autoCorrect='off'
              spellCheck='false'
            />
          </div>
          <ul className={styles.menuList}>
            {filteredData.map((country, index) => (
              <li key={`country-${index}`}>
                <button type='button' data-country={country} onClick={handleCountryClick}>
                  {country}
                </button>
              </li>
            ))}
            {!filteredData.length && <li>No Result 🙁</li>}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
