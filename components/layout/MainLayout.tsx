import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'
import styles from '../../styles/Layout.module.css'


interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}

export default MainLayout