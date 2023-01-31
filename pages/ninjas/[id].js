import styles from '../../styles/Ninjas.module.css'

export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return{
            params: {id: ninja.id.toString()}
        }
    })
    return{
        paths: paths,
        fallback: true
    }

}

export const getStaticProps = async (info) => {
    const id = info.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return{
        props: {ninja: data}
    }
}

const Details = ({ninja}) => {
    return(
        <>
            <h1>{ninja.name}</h1>
            <p className={styles.text}><b>Username:</b> {ninja.username}</p>
            <p className={styles.text}><b>Email:</b> {ninja.email}</p>
            <p className={styles.text}><b>Website:</b> {ninja.website}</p>
            <p className={styles.text}><b>Phone:</b> {ninja.phone}</p>
            <p className={styles.text}><b>City:</b> {ninja.address.city}</p>
            <p className={styles.text}><b>Company:</b> {ninja.company.name}</p>

            <span className={styles.span}>Go back to the <a className={styles.btn} href="/ninjas">All ninjas page</a></span>
        </>
    )
}
export default Details