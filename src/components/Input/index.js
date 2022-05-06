import { useState } from 'react'
import styles from './Input.module.scss'

function Input() {
  const [email, setEmail] = useState('')
  const [emailFocus, setEmailFocus] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isPwdVisible, setIsPwdVisible] = useState(false)

  const checkEmail = (email) => {
    const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const regex = new RegExp(pattern)

    return regex.test(email)
  }

  const setUserEmail = (e) => {
    setEmail(e.target.value)
    setIsValidEmail(checkEmail(e.target.value))
  }

  return (
    <div className={styles.input}>
      <div className={styles.formWrapper}>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          placeholder='E-mail'
          value={email}
          onChange={setUserEmail}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <span className={styles.validIcon}>{isValidEmail ? '✅' : '🤔'}</span>
        {email && !isValidEmail && !emailFocus && (
          <span className={styles.invalidMessage}>❗️Invalid e-mail address❗️</span>
        )}
      </div>
      <div className={styles.formWrapper}>
        <label htmlFor='password'>Password</label>
        <input type={isPwdVisible ? 'text' : 'password'} id='password' placeholder='Password' />
        <button className={styles.viewButton} type='button' onClick={() => setIsPwdVisible(!isPwdVisible)}>
          {isPwdVisible ? '🙉' : '🙈'}
        </button>
      </div>
    </div>
  )
}

export default Input
