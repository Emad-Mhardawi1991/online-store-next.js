import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/ui/hero/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero/>
      <p>Home Page</p>
    </div>
  )
}
