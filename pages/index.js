import Featured from '@/components/Featured'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best Pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
     
    </div>
  )
}
