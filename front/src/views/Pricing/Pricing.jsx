import { Title, NavBar, Footer } from '../../components'
import styles from './Pricing.module.css'
import iconBasic from '../../assets/icons/icon-basic.png'
import iconPremium from '../../assets/icons/icon-premium.png'

export default function Pricing2() {
    return (
        <div className={styles.background}>
            <NavBar />
            <Title
                title="Pricing"
                link="/auth/register"
                linkTitle="Get Started"
            />
            <div className={styles.flex}>
                <div className={styles.container}>
                    <div className={styles.cardsContainer}>
                        <div className={styles.card}>
                            <img src={iconBasic} alt="Gym" />
                            <h4>Basic Membership</h4>
                            <ul>
                                <li>Access during regular hours.</li>
                                <li>Basic equipment usage.</li>
                                <li>Locker room and shower facilities.</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <img src={iconPremium} alt="Schedule" />
                            <h4>Premium Membership</h4>
                            <ul>
                                <li>24/7 gym access.</li>
                                <li>Unlimited equipment usage.</li>
                                <li>+ Premium amenities like sauna.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}