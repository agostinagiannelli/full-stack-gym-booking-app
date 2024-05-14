import { Title, NavBar, Footer } from '../../components'
import styles from './AboutUs.module.css'
import gymImage from '../../assets/img/gym.jpeg'

export default function AboutUs() {
  return (
    <div className={styles.background}>
      <NavBar />
      <Title
        title="About Us"
        link="/auth/register"
        linkTitle="Get Started"
      />
      <div className={styles.aboutUsContainer}>
        <div className={styles.imageContainer}>
          <img src={gymImage} alt="Gym" className={styles.gymImage} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.paragraph}>
            <b>Hours of Operation:</b> Monday to Friday from 7am to 9am & 5pm to 9pm
          </p>
          <p className={styles.paragraph}>
            Welcome to our fitness community! Whether you're a seasoned athlete or just starting your fitness journey, we have something for everyone.
          </p>
          <p className={styles.paragraph}>
            Our experienced trainers and friendly staff are here to support you every step of the way. We offer a wide range of classes and programs to help you achieve your fitness goals.
          </p>
          <p className={styles.paragraph}>
            Join us today and start your journey towards a healthier, happier you. <b>Let's make every rep count!</b>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}