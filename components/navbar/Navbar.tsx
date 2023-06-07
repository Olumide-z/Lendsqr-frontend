import styles from './navbar.module.scss';
import {useState} from 'react'

import Image from "next/image"
import profile from '/public/assets/images/profile.png';

import { BiSearch } from 'react-icons/bi';
import {IoMdArrowDropdown} from 'react-icons/io';
import { BsBell } from 'react-icons/bs';
import Logo from '../logo/Logo';
import { useUserAuth } from '@/auth/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
    const [profileIsClicked, setProfileIsClicked] = useState<boolean>(false)
    const { logOut, user } = useUserAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try{
            await logOut()
            router.push('/')
        }catch(err: any){
            console.log(err.message)
        }
    }
  return (
    <div className={styles.navbar}>
        {/* Logo */}
        <Link href='/dashboard'><Logo /></Link>
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
                <p>{user.email} <span><IoMdArrowDropdown/></span></p>
            </div>
        </div>
        {/* Logout */}
        {profileIsClicked && (
            <div className={styles.navbar__logout} onClick={handleLogout}>
                <p>Logout</p>
            </div>
        )}
    </div>
  )
}

export default Navbar