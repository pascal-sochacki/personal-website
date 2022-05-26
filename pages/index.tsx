import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Personal Website | Pascal Sochacki</title>
        <meta name="description" content="Personal Website from Pascal Sochacki a IT Consultant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Personal Website
        </h1>

        <p className={styles.description}>
          Currently under construction!
        </p>

      </main>
    </div>
  )
}

export default Home
