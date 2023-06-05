import React from 'react';
import styles from './sidebar.module.scss'
import { FaBriefcase } from 'react-icons/fa';
import {IoMdArrowDropdown} from 'react-icons/io';
import { MdLogout } from 'react-icons/md';
import {ImHome} from 'react-icons/im';
import { businesses, customers, settings } from './data';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <p className={styles.sidebar__org}>
        <span><FaBriefcase/></span>Switch Organization<span><IoMdArrowDropdown /></span>
      </p>
      <p className={styles.sidebar__dash}><span><ImHome/></span>Dashboard</p>
      {/* Mapping through the sidebar data */}
      <div className={styles.sidebar__items}>
        <h4>CUSTOMERS</h4>
        <ul>
        {customers.map((item) => (
          <li key={item.id}>
            <span>{item.icons}</span>
            <p>{item.name}</p>
          </li>
        ))}
        </ul>
      </div>

      <div className={styles.sidebar__items}>
        <h4>BUSINESSES</h4>
        <ul>
        {businesses.map((item) => (
          <li key={item.id}>
            <span>{item.icons}</span>
            <p>{item.name}</p>
          </li>
        ))}
        </ul>
      </div>

      <div className={styles.sidebar__items}>
        <h4>SETTINGS</h4>
        <ul>
        {settings.map((item) => (
          <li key={item.id}>
            <span>{item.icons}</span>
            <p>{item.name}</p>
          </li>
        ))}
        </ul>
      </div>
      {/* Logout */}
      <div className={styles.sidebar__logout}>
        <p><MdLogout/><span>Logout</span></p>
      </div>

    </div>
  )
}

export default Sidebar