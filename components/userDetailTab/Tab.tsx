import { useState } from "react";
import styles from './tab.module.scss';

const tabsData = [
    { id: 1, label: "General Details" },
    { id: 2, label: "Documents" },
    { id: 3, label: "Bank Details" },
    { id: 4, label: "Loans" },
    { id: 5, label: "Savings" }
  ];

  interface TabProps{
    toggleTab: number;
    handleToggle: (id: number) => void
  }
  
const Tab = ({ toggleTab, handleToggle} : TabProps) => {
   
    return (
      <div className={styles.tab}>
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={toggleTab === tab.id ? styles['active-tabs'] : styles.tabs}
            onClick={() => handleToggle(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default Tab;
  