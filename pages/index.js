import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import styles from '../styles/Home.module.css'
import React from "react"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h2 className={styles.title}>Home Page</h2>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et ipsam inventore dolorem beatae saepe? Consectetur, consequuntur voluptatum. Ipsum deserunt porro est veritatis nostrum tenetur optio architecto hic cum eos!</p>
      <a className={styles.btn} href="/ninjas/test">See Test page</a>
    </>
  )
}
export default Home
