import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

import styles from '../../styles/layout.module.scss';

export default function Layout({ children } : any) {
  return (
     
      <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.sidebar}>
            <Sidebar />
        </div>
      
      {children}
      </div>
      </div>
      
  )
}
