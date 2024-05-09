import styles from './Appointment.module.css'

export default function Appointment({ id, date, time, status, user }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Appointment:</h3>
      <p className={styles.paragraph}>{id}</p>
      <p className={styles.paragraph}>{date}</p>
      <p className={styles.paragraph}>{time}</p>
      <p className={styles.paragraph}>{status}</p>
      <p className={styles.paragraph}>{user}</p>
    </div>
  )
}
