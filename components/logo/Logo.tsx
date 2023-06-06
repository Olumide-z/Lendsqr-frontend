import React from 'react'
import styles from './logo.module.scss';
import Image from 'next/image';
import logo2 from '/public/assets/images/lendsqr.svg';
import logo from '/public/assets/images/logo.png';

const Logo = () => {
  return (
    <div className={styles.logo}>
        <Image src={logo} alt='logo image' width={20.63} height={20.84}/>
        <Image src={logo2} alt='logo' width={115.37} height={30}/>
    </div>
  )
}

export default Logo