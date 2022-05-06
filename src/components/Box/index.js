import styles from './Box.module.scss'
import PropTypes from 'prop-types'

function Box({ name, children }) {
  return (
    <div className={styles.box}>
      <h1>{name}</h1>
      {children}
    </div>
  )
}

Box.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Box
