import React from 'react'
import styles from './userInfo.module.scss';
import { SingleUser } from '@/types/singleUser';

interface InfoProps {
    user: SingleUser
}

const UserInfo = ({ user } : InfoProps) => {
  return (
    <div className={styles.userInfo}>
        {user &&
            <div className={styles.userInfo__content}>
                {/* Personal info */}
                <div className={styles.userInfo__content_info}>
                    <h3>Personal Information</h3>
                    <div className={styles['info_details']}>
                        <p><h6>FULL NAME</h6><span>{user.profile.firstName} {user.profile.lastName}</span></p>
                        <p><h6>Phone number</h6><span>+{user.profile.phoneNumber.slice(0,12)}</span></p>
                        <p><h6>email address</h6>
                            <span>{user?.email.length <= 21
                                ? user?.email    
                                : `${user?.email.slice(0,21)}...`
                            }</span>
                        </p>
                        <p><h6>bvn</h6><span>{user.profile.bvn}</span></p>
                        <p><h6>Gender</h6><span>{user.profile.gender}</span></p>
                        <p><h6>Martial status</h6><span>Single</span></p>
                        <p><h6>Children</h6><span>None</span></p>
                        <p><h6>type of residence</h6><span>{user.profile.address}</span></p>
                    </div>
                </div>
                {/* Education and employment */}
                <div className={styles.userInfo__content_info}>
                    <h3>Education and Employment</h3>
                    <div className={styles['info_details']}>
                        <p><h6>Level of education</h6><span>B.Sc</span></p>
                        <p><h6>EMPLOYMENT STATUS</h6><span>{user.education.employmentStatus}</span></p>
                        <p><h6>sector of employment</h6><span>{user.education.sector}</span></p>
                        <p><h6>duration of employment</h6><span>{user.education.duration}</span></p>
                        <p><h6>office mail</h6>
                            <span>
                                {user?.education.officeEmail.length <= 21
                                    ? user?.education.officeEmail    
                                    : `${user?.education.officeEmail.slice(0,21)}...`
                                }
                            </span>
                        </p>
                        <p><h6>Monthly income</h6><span>N{user.education.monthlyIncome[1]} - N{user.education.monthlyIncome[0]}</span></p>
                        <p><h6>Loan repayment</h6><span>{user.education.loanRepayment}</span></p>
                    </div>
                </div>
                {/* Social */}
                <div className={styles.userInfo__content_info}>
                    <h3>Socials</h3>
                    <div className={styles['info_details']}>
                        <p><h6>Twitter</h6><span>{user.socials.twitter}</span></p>
                        <p><h6>Facebook</h6><span>{user.socials.facebook}</span></p>
                        <p><h6>instagram</h6><span>{user.socials.instagram}</span></p>
                    </div>
                </div>
                {/* Gurantor */}
                <div className={styles.userInfo__content_info}>
                    <h3>Guarantor</h3>
                    <div className={styles['info_details']}>
                        <p><h6>FULL NAME</h6><span>{user.guarantor.firstName} {user.guarantor.lastName}</span></p>
                        <p><h6>Phone number</h6><span>+{user.guarantor.phoneNumber}</span></p>
                        <p><h6>email address</h6><span>{user.guarantor.address}</span></p>
                        <p><h6>relationship</h6>{user.guarantor?.gender === 'Male' ? <span>Brother</span> : <span>Sister</span> }</p>
                    </div>
                </div>

            </div>
        }
    </div>
  )
}

export default UserInfo