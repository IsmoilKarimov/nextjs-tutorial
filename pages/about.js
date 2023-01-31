import Head from 'next/head';
import React from 'react';
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <h1 className={styles.title}>This is About page</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi ea nihil omnis, aut voluptatum? Similique sint esse corrupti cupiditate dignissimos accusantium culpa obcaecati facilis et velit repudiandae, unde id.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptates. Vitae fuga commodi, placeat temporibus sit maxime maiores porro expedita eos fugit velit deserunt nobis beatae est eligendi quo! Sunt?</p>
        </> 
    )
}
 
export default About;