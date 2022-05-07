import { useState } from 'react'
import styles from './Toggle.module.scss'
import { TOGGLE_DATA } from '../../assets/data'
import { cx } from '../../styles'

function Toggle() {
  const [isClicked, setIsClicked] = useState(false)

  const handleToggleClick = () => {
    setIsClicked((prev) => !prev)
  }

  return (
    <div className={cx(styles.toggle, { [styles.clicked]: isClicked })}>
      <div className={styles.toggleBall} />
      {TOGGLE_DATA.map((data, index) => (
        <button type='button' key={`toggle-title-${index}`} onClick={handleToggleClick}>
          {data}
        </button>
      ))}
    </div>
  )
}

export default Toggle
