import React, { useState } from 'react'
import styles from './signup.module.scss';
import Form from '../authForm/Form'
import { useUserAuth } from '@/auth/AuthContext'
import { useRouter } from 'next/router';
import { useAppSelector } from '@/app/hooks';

const Signup = () => {
    const [loading, setLoading] = useState(false);

    const { userEmail, userPassword } = useAppSelector(state => state.user);

    const router = useRouter();
    const { signUp } = useUserAuth();

    const registerUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try{
            await signUp(userEmail, userPassword);
            setLoading(true);
            router.push('/dashboard');
        }catch(err: any){
            console.log(err.message)
          }
    }

  return (
    <div>
        <Form
            username
        />
        <button onClick={registerUser} className={styles.signupBtn}>
            {loading ? 'Loading...' : 'Register'}
        </button>
    </div>
  )
}

export default Signup