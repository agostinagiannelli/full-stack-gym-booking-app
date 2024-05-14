import { LinkButton, NavBar, Footer } from '../../components'
import './Home.css'

export default function Home() {
    return (
        <div className="bg-image">
            <NavBar />
            <div className="home-content d-flex justify-content-center align-items-center flex-shrink-0">
                <div className="container col-md-8">
                    <div className="pb-5">
                        <h2 className="home-title text-center">Welcome! <br />Get ready to level up your fitness game.</h2>
                        <div className="scrolling-words-container d-flex align-items-center gap-3">
                            <div className="col d-flex justify-content-end align-items-center mr-auto border-right pr-3">
                                <div className="scrolling-words-box">
                                    <ul>
                                        <li>Crossfit</li>
                                        <li>Yoga</li>
                                        <li>Pilates</li>
                                        <li>Calisthenics</li>
                                        <li>Spinning</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col text-white ml-auto pl-3">
                                <p className="mb-0">for everyone</p>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <LinkButton link="/auth/login" text="Get Started" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}