import styles from 'styles/contact.module.css'
import Social from 'components/social'

const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social />
      <address>cube@web.mail.address</address>
    </div>
  )
}
export default Contact
