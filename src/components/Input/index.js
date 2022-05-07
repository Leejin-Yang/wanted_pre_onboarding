import { useState } from 'react'
import styles from './Input.module.scss'

function Input() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailFocus, setEmailFocus] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const checkEmailValidation = (email) => {
    const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const regex = new RegExp(pattern)

    return regex.test(email)
  }

  const handleEmailChange = (e) => {
    const email = e.currentTarget.value

    setEmail(email)
    setIsValidEmail(checkEmailValidation(email))
  }

  const handleEmailFocus = () => {
    setEmailFocus((prev) => !prev)
  }

  const handlePasswordChange = (e) => {
    const password = e.currentTarget.value

    setPassword(password)
  }

  const handleViewButtonClick = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  return (
    <div className={styles.input}>
      <div className={styles.formWrapper}>
        <label htmlFor='email'>E-mail</label>
        <input
          type='text'
          id='email'
          placeholder='E-mail'
          value={email}
          onChange={handleEmailChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmailFocus}
          autoCapitalize='off'
          autoCorrect='off'
          spellCheck='false'
        />
        <span className={styles.validIcon}>{isValidEmail ? '✅' : '🤔'}</span>
        {email && !isValidEmail && !emailFocus && (
          <span className={styles.invalidMessage}>❗️Invalid e-mail address❗️</span>
        )}
      </div>
      <div className={styles.formWrapper}>
        <label htmlFor='password'>Password</label>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          id='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
          autoCapitalize='off'
          autoCorrect='off'
          spellCheck='false'
        />
        <button className={styles.viewButton} type='button' onClick={handleViewButtonClick}>
          {isPasswordVisible ? '🙉' : '🙈'}
        </button>
      </div>
    </div>
  )
}

export default Input
