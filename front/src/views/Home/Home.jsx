import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';

export default function Home() {
    return (
        <div className="bg-image">
            <NavBar />
            <div className="home-content d-flex justify-content-center align-items-center mb-5">
                <div className="container col-md-8">
                    <div className="text-center pb-5">
                        <h2 className="my-5 home-title">Welcome <span class="waving-hand">👋</span><br />Get ready to level up your fitness game.</h2>
                        <button className="btn btn-outline-light btn-lg btn-blue px-5">Get Started</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}