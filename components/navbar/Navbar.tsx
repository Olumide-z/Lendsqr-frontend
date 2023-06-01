import styles from './navbar.module.scss';
import {useState} from 'react'

import Image from "next/image"
import logo from '/public/assets/images/logo.png';
import profile from '/public/assets/images/profile.png';
import logo2 from '/public/assets/images/lendsqr.svg';
import { BiSearch } from 'react-icons/bi';
import {IoMdArrowDropdown} from 'react-icons/io';
import { BsBell } from 'react-icons/bs';

const Navbar = () => {
    const [profileIsClicked, setProfileIsClicked] = useState<boolean>(false)
  return (
    <div className={styles.navbar}>
        {/* Logo */}
        <div className={styles.navbar__logo}>
            <Image src={logo} alt='logo image' width={20.63} height={20.84}/>
            <Image src={logo2} alt='logo' width={115.37} height={30}/>
        </div>
        {/* Search */}
        <div className={styles.navbar__search}>
            <input type="text" placeholder='Search for anything'/>
            <button><BiSearch/></button>
        </div>
        {/* User profile */}
        <div className={styles.navbar__user}>
            <a href="#">Docs</a>
            <p><BsBell /></p>
            <div onClick={() => setProfileIsClicked((prev) => !prev)}>
                <Image 
                src={profile} 
                alt='profile image' 
                width={48} 
                height={48}
                className={styles.navbar__user_img}
                />
                <p>Adedeji <span><IoMdArrowDropdown/></span></p>
            </div>
        </div>
        {/* Logout */}
        {profileIsClicked && (
            <div className={styles.navbar__logout}>
                <p>Logout</p>
            </div>
        )}
    </div>
  )
}

export default Navbar