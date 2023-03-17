import styles from './index.css'

export function Message ({type, msg}) {
    return <div className={`${styles.message}`}>{msg}</div>
}