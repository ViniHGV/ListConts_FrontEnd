import styles from './index.css'

export function Alert ({type, msg}) {
    return(
        <div className='AlertMsg'>
        <p className={`${styles.alert} ${styles[type]}`}>{msg}</p>
        </div>
    )
}