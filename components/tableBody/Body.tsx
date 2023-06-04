import { UserData } from '@/types/userData'
import moment from 'moment'
import React, {useState, useEffect} from 'react'
import styles from './body.module.scss';
import { BsEye } from 'react-icons/bs';
import blacklist from '../../public/assets/images/Vector.png';
import active from '../../public/assets/images/Vector2.png';
import info from '../../public/assets/images/info.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';


interface UserProps{
    user: UserData
}


const Body = ({ user } : UserProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  const handleViewDetails = () => {
    setIsLoading(true);
    router.push(`/dashboard/${user.id}`);
  };

  
  
  const handleStatusChange = (newStatus: string) => {
    localStorage.setItem(`status-${user?.id}`, newStatus);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  useEffect(() => {
    const savedStatus = localStorage.getItem(`status-${user?.id}`);
    if (savedStatus) {
      localStorage.setItem(`status-${user?.id}`, savedStatus);
    } else {
      localStorage.setItem(`status-${user?.id}`, 'Active');
    }
  }, [user?.id]);

  const getStatus = () => {
    const savedStatus = localStorage.getItem(`status-${user?.id}`);
    return savedStatus || 'Active';
  };
  return (
    <>
        <tr key={user?.id} className={styles.row}>
            <td>{user?.orgName}</td>
            <td>{user?.userName}</td>
            <td>
            {user?.email.length <= 20
                ? user?.email    
                : `${user?.email.slice(0,20)}...`
            }
            </td>
            <td>{user?.phoneNumber.slice(0,14)}</td>
            <td>{moment(user?.createdAt).format("lll")}</td>
            <td className={styles.row__td}>
                <div>
                    <p className={getStatus() === "Active" ? styles.activeStatus : styles.blacklistedStatus}>
                        {getStatus()}
                    </p>
                </div>
                <button onClick={toggleDropdown}>
                    <Image src={info} width={3.33} height={14.44} alt='bar'/>
                </button>

                {/* dropdown */}
                {showDropdown && (
                    <ul className={styles.dropdown}>
                        <li className={styles.dropdown__link} onClick={handleViewDetails}>
                            {isLoading ? 'Loading...' : (
                            <>
                                <BsEye />
                                <p>View Details</p>
                            </>
                            )}
                        </li>

                        <li onClick={() => handleStatusChange('Blacklisted')}>
                            <Image src={blacklist} width={11} height={13.1} alt='blacklist'/>
                            <p>Blacklist User</p>
                        </li>
                        <li onClick={() => handleStatusChange('Active')}>
                            <Image src={active} width={11} height={13.1} alt='active'/>
                            <p>Activate User</p>
                        </li>
                    </ul>
                )}
            </td>
        </tr>
    </>
  )
}

export default Body