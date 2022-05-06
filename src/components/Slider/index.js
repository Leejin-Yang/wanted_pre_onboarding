import { useState } from 'react'
import styles from './Slider.module.scss'
import { SLIDER_DATA } from '../../assets/data'
import { cx } from '../../styles'

function Slider() {
  const [value, setValue] = useState(1)

  const isColored = (data) => {
    return value >= data
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const clickButton = (e) => {
    const { step } = e.target.dataset

    setValue(step)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.valueWrapper}>
        <span>{value}</span>
        <span>%</span>
      </div>
      <div className={styles.rangeBar}>
        <input type='range' min='1' max='100' value={value} onChange={handleChange} />
        <div className={styles.markerWrapper}>
          {SLIDER_DATA.map((data) => (
            <div className={cx(styles.marker, { [styles.colored]: isColored(data) })} key={`marker-${data}`} />
          ))}
        </div>
      </div>
      <div className={styles.stepWrapper}>
        {SLIDER_DATA.map((data, index) => (
          <button type='button' key={`step-${index}`} data-step={data} onClick={clickButton}>
            {data}%
          </button>
        ))}
      </div>
    </div>
  )
}

export default Slider
