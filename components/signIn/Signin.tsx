import React, { useState } from 'react'
import styles from './signin.module.scss';
import Form from '../authForm/Form';
import { useAppSelector } from '@/app/hooks';
import { useRouter } from 'next/router';
import { useUserAuth } from '@/auth/AuthContext';

const Signin = () => {
    const [loading, setLoading] = useState(false);

    const { userEmail, userPassword } = useAppSelector(state => state.user);

    const router = useRouter();
    const { logIn } = useUserAuth();

    const loginUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try{
            await logIn(userEmail, userPassword);
            setLoading(true);
            router.push('/dashboard');
        }catch (error : any) {
            console.log(error.message)
        }
    }

  return (
    <div>
        <Form 
            login
        />
        <button className={styles.signinBtn} onClick={loginUser}>
            {loading ? 'Loading...' : 'Log in'}
        </button>
    </div>
  )
}

export default Signin