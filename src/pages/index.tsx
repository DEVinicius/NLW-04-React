import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <div className={styles.container}>  
        <ExperienceBar />
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div></div>
        </section>
      </div>
    </>
  )
}
