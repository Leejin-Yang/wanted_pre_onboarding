import { useState } from 'react'
import styles from './Dropdown.module.scss'
import { DROPDOWN_DATA } from '../../assets/data'

function Dropdown() {
  const [country, setCountry] = useState('All Countries 🌏')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentData, setCurrentData] = useState(DROPDOWN_DATA)

  const clickSelected = () => {
    setIsMenuOpen(!isMenuOpen)
    setCurrentData(DROPDOWN_DATA)
  }

  const selectCountry = (e) => {
    const { country } = e.target.dataset
    setCountry(country)
    setIsMenuOpen(false)
  }

  const filterData = (data, word) => {
    if (!word) {
      return data
    }

    const newData = data.filter((country) => country.toLowerCase().startsWith(word.toLowerCase()))

    return newData
  }

  const handleSearch = (e) => {
    const searchWord = e.target.value

    setCurrentData(filterData(DROPDOWN_DATA, searchWord))
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles.selected}>
        <p>{country}</p>
        <button type='button' onClick={clickSelected}>
          {isMenuOpen ? '▲' : '▼'}
        </button>
      </div>
      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.searchForm}>
            <div className={styles.searchIcon}>👀</div>
            <input type='text' placeholder='Search Country' onChange={handleSearch} />
          </div>
          <ul className={styles.menuList}>
            {currentData.map((data, index) => (
              <li key={`country-${index}`}>
                <button type='button' data-country={data} onClick={selectCountry}>
                  {data}
                </button>
              </li>
            ))}
            {!currentData.length && <span>No Result</span>}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
