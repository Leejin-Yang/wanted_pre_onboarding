import { useState } from 'react'
import styles from './Slider.module.scss'
import { SLIDER_DATA } from '../../assets/data'
import { cx } from '../../styles'

function Slider() {
  const [percentage, setPercentage] = useState(1)

  const isColored = (data) => {
    return percentage >= data
  }

  const handleChange = (e) => {
    const percentage = e.currentTarget.value

    setPercentage(() => percentage)
  }

  const handleStepClick = (e) => {
    const { step } = e.currentTarget.dataset

    setPercentage(() => step)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.percentageWrapper}>
        <span>{percentage}</span>
        <span>%</span>
      </div>
      <div className={styles.rangeBar}>
        <input type='range' min='1' max='100' value={percentage} onChange={handleChange} />
        <div className={styles.showPercentageBar} aria-hidden='true' style={{ '--percentage': `${percentage}%` }} />
        <div className={styles.markerWrapper}>
          {SLIDER_DATA.map((step) => (
            <div className={cx(styles.marker, { [styles.colored]: isColored(step) })} key={`marker-${step}`} />
          ))}
        </div>
      </div>
      <div className={styles.stepWrapper}>
        {SLIDER_DATA.map((step) => (
          <button type='button' key={`step-${step}`} data-step={step} onClick={handleStepClick}>
            {step}%
          </button>
        ))}
      </div>
    </div>
  )
}

export default Slider
