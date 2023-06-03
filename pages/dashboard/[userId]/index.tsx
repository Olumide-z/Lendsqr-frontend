import React, {useState} from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import Layout from '../layout'
import styles from './user.module.scss';
import { SingleUser } from '@/types/singleUser'
import Link from 'next/link';
import Image from 'next/image';
import Tab from '@/components/userDetailTab/Tab';
import UserInfo from '@/components/userInfo/UserInfo';

interface UserProps {
    user: SingleUser
}

const UserDetails = ({ user } : UserProps) => {
    
    const [toggleTab, setToggleTab] = useState(1);
    // table toggle
    const handleToggle = (id : number) => {
      setToggleTab(id);
    };

  return (
    <Layout>
        <div className={styles.user}>
            <Link href='/dashboard' className={styles.user__link}>
                <p className={styles.user__back}>
                    <BsArrowLeft />
                    <span>Back to Users</span>
                </p>
            </Link>
            {/* Heading */}
            <div className={styles.user__heading}>
                <h2>Users Details</h2>
                <div>
                    <button
                        className={styles.user__blacklist}
                        onClick={() => {}}
                    >
                        blacklist user
                    </button>
                    <button
                        className={styles.user__active}
                        onClick={() => {}}
                    >
                        activate user
                    </button>
                </div>
            </div>
            {/* Displaying user details */}
            {/* User Tab */}
            {user &&
                <div className={styles.user__details}>
                    <div className={styles.user__details_tabs}>
                        <Image 
                        src={user.profile.avatar} 
                        alt='user' 
                        width={100} 
                        height={100}
                        className={styles.user__details_image}
                        />
                        <div className={styles.user__details_user}>
                            <p>{user?.profile?.firstName} {user?.profile?.lastName}</p>
                            <span>{user?.profile?.address}</span>
                        </div>
                        <div className={styles.user__details_userTier}>
                            <p>User's Tier</p>
                            <span>ICONs</span>
                        </div>
                        <div className={styles.user__details_userBank}>
                            <p>{user?.profile?.currency}{user?.accountBalance}</p>
                            <span>{user?.accountNumber}/Providus Bank</span>
                        </div>
                    </div>
                    {/* Tab */}
                    <Tab 
                        toggleTab={toggleTab}
                        handleToggle={handleToggle}
                    />
                </div>
            }
            {/* User Informations */}
            <div>
                <div>
                    <div className={toggleTab === 1 ? styles['active-content'] : styles.content}>
                        <UserInfo 
                            user={user}
                        />
                    </div>
                    <div
                    className={toggleTab === 2 ? styles['active-content'] : styles.content}
                    >
                        <h2>Other Content</h2>
                    </div>
                </div>
            </div>

        </div>
    </Layout>
  )
}

export default UserDetails

// Fetching data using GetStaticProps
export async function getStaticProps(context :  any) {
    const { params } = context
    const response = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.userId}`
    )
    const data = await response.json();
    console.log(data);

    return {
        props : {
            user: data
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { userId: '1' }}],
        fallback: true
    }
}