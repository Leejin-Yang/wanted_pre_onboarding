import { useState } from 'react'
import styles from './Tab.module.scss'
import { TAB_DATA } from '../../assets/data'
import { cx } from '../../styles'

const TAB_WIDTH = 150

function Tab() {
  const [activeTab, setActiveTab] = useState(0)
  const position = activeTab * TAB_WIDTH

  const isActive = (index) => {
    return activeTab === index
  }

  const handleTabClick = (e) => {
    const { id } = e.currentTarget.dataset

    setActiveTab(Number(id))
  }

  return (
    <div className={styles.tab}>
      {TAB_DATA.map((menu, index) => (
        <button
          className={cx(styles.tabMenu, { [styles.tabActive]: isActive(index) })}
          type='button'
          key={`tab-menu-${index}`}
          data-id={index}
          onClick={handleTabClick}
        >
          {menu}
        </button>
      ))}
      <div className={styles.activeBar} style={{ '--position': `${position}px` }} />
    </div>
  )
}

export default Tab
