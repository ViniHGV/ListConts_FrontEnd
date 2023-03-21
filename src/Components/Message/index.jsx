import styles from './index.css'

export function Message ({style,type, msg}) {
    return  <div className={`${style}, ${type}`}>{msg}</div>
}