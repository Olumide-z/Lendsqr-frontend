import { UserData } from '@/types/userData'
import moment from 'moment'
import React from 'react'
import styles from './body.module.scss';
import info from '../../public/assets/images/info.svg';
import Image from 'next/image';

interface UserProps{
    user: UserData
}

const Body = ({ user } : UserProps) => {
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
                {/* {(user?.accountBalance >= '55' && user?.accountBalance < '100') && <p>Pending</p>}
                {user?.accountBalance > '100' && <p>Active</p>}
                {user?.accountBalance < '40' && <p>Inactive</p>} */}
                <p>active</p>
                <button>
                    <Image src={info} width={3.33} height={14.44} alt='bar'/>
                </button>
            </td>
        </tr>
    </>
  )
}

export default Body