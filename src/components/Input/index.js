import React, { useState } from 'react';
import {
  Container,
  FormWrapper,
  ValidIcon,
  ValidMsg,
  ViewButton,
} from './style';

const Input = () => {
  const [email, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const checkEmail = (email) => {
    const regex = new RegExp(
      /^[a-z0-9]([\w._-])([a-z0-9])+([\w._-])+@([a-z0-9]+\.)+[a-z0-9]{2,8}$/i
    );

    return regex.test(email);
  };

  const setUserEmail = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(checkEmail(e.target.value));
  };

  return (
    <Container>
      <FormWrapper>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          placeholder='E-mail'
          value={email}
          onChange={setUserEmail}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        ></input>
        <ValidIcon>{isValidEmail ? '✅' : '🤔'}</ValidIcon>
        {email && !isValidEmail && !emailFocus && (
          <ValidMsg>❗️Invalid e-mail address❗️</ValidMsg>
        )}
      </FormWrapper>
      <FormWrapper>
        <label htmlFor='password'>Password</label>
        <input
          type={isPwdVisible ? 'text' : 'password'}
          id='password'
          placeholder='Password'
        ></input>
        <ViewButton onClick={() => setIsPwdVisible(!isPwdVisible)}>
          {isPwdVisible ? '🙉' : '🙈'}
        </ViewButton>
      </FormWrapper>
    </Container>
  );
};

export default Input;
