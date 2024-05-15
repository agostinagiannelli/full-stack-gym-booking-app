import { LinkButton, NavBar, Footer } from '../../components'
import './Home.css'

export default function Home() {
    return (
        <div className="bg-image d-flex flex-column min-vh-100">
            <NavBar />
            <div className="d-flex align-items-center flex-fill">
                <div className="container col-md-8">
                    <div>
                        <h2 className="home-title text-center">Welcome! <br />Get ready to level up your fitness game.</h2>
                        <div className="scrolling-words-container">
                            <div className="scrolling-words-box">
                                <ul>
                                    <li>Crossfit</li>
                                    <li>Yoga</li>
                                    <li>Pilates</li>
                                    <li>Calisthenics</li>
                                    <li>Crossfit</li>
                                </ul>
                            </div>
                            <span className="text-white">for everyone</span>
                        </div>
                        <div className="text-center">
                            <LinkButton link="/auth/login" text="Get Started" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}