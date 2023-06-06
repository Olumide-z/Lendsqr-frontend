import React, { useState } from 'react'
import styles from './form.module.scss';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setEmail, setPassword, setUsername } from '@/features/userSlice';
import Logo from '../logo/Logo';

interface FormProps{
  username?: boolean;
  login?: boolean;
}

const Form = ({ username, login } : FormProps) => {
  const dispatch = useAppDispatch();
  const { userEmail, userPassword, userName } = useAppSelector(state => state.user);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(prev => !prev)
  }
  return (
    <div className={styles.form}>
      <div className={styles.form__logo}>
        <Logo />
      </div>
      <h3>Welcome!</h3>
      <p>Enter details to {login ? 'login' : 'signup'}.</p>
      <form>
          <input 
            type="email" 
            placeholder='Email'
            value={userEmail}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          /><br/>
          {username && 
            <input 
              type='text'
              placeholder='Username'
              value={userName}
              onChange={(e) => dispatch(setUsername(e.target.value))}
            />}<br/>
          <div className={styles.form__password}>
            <input 
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder='Password'
              value={userPassword}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              /><br/>
            <button onClick={handleShowPassword}>{showPassword ? 'Hide' : 'Show'}</button>
          </div>
          {!login && <span>Password should be six characters long</span>}
          <p>Forgot Password</p>
      </form>
      {!login &&
        <p className={styles.form__login}>
          Already have an account ? <Link href='/login'>Login</Link>
        </p>
      }
      {login &&
        <p className={styles.form__login}>
          Don't have an account ? <Link href='/'>Register</Link>
        </p>
      }
    </div>
  )
}

export default Form