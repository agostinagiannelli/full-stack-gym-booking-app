import styles from './NavBar.module.css'
import logo from '../../assets/Reset-Fitness.png';

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logoImg} />
            </div>
            <ul className={styles.navLinks}>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Get In Touch</a></li>
            </ul>
            <div className={styles.authLinks}>
                <a href="#login">Login/Register</a>
            </div>
        </nav>
    )
}