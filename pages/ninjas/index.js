import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'


export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return{
        props: {ninjas: data}
    }

}


const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            <Head>
                <title>Ninja List | Ninjas</title>
                <meta name="keywords" content="ninjas" />
            </Head>

            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <h3 className={styles.single}>{ninja.name}</h3>
                </Link>
            ))}
            <span className={styles.span}>Go back to the <a className={styles.btn} href="/">Homepage</a></span>
        </div>
        
     )
}
 
export default Ninjas;