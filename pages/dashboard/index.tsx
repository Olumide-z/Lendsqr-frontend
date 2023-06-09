import React, {useEffect} from 'react';
import Head from 'next/head';
import styles from './dashboard.module.scss';
import Layout from './layout'
import Widget from '@/components/widgets/Widget'
import userImage from '../../public/assets/images/users.svg'
import activeUser from '../../public/assets/images/activeUser.svg'
import loan from '../../public/assets/images/loan.svg'
import savings from '../../public/assets/images/savings.svg'
import Table from '@/components/table/Table';

const Dashboard = () => {

  return (
    <>
    <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/assets/images/lendsqr.svg" />
    </Head>
    <Layout>
      <section className={styles.dashboard}>
        <h3 className={styles.dashboard__user}>Users</h3>
        {/* Widgets */}
        <div className={styles.dashboard__widgets}>
          <Widget image={userImage} desc='USERS' number='2,453' bg1/>
          <Widget image={activeUser} desc='ACTIVE USERS' number='2,453' bg2/>
          <Widget image={loan} desc='USERS WITH LOANS' number='12,453' bg3/>
          <Widget image={savings} desc='USERS WITH SAVINGS' number='102,453'/>
        </div>
        {/* Table */}
        <Table />
      </section>
    </Layout>
    </>
  )
}

export default Dashboard