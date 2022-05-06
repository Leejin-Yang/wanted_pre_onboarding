import { useState } from 'react'
import styles from './Toggle.module.scss'
import { TOGGLE_DATA } from '../../assets/data'
import { cx } from '../../styles'

function Toggle() {
  const [isClicked, setIsClicked] = useState(false)

  const handleToggle = () => {
    setIsClicked(!isClicked)
  }

  return (
    <button type='button' className={styles.toggle} onClick={handleToggle}>
      <div className={cx(styles.toggleBall, { [styles.clicked]: isClicked })} />
      {TOGGLE_DATA.map((data, index) => (
        <span key={`toggle-title-${index}`}>{data}</span>
      ))}
    </button>
  )
}

export default Toggle
