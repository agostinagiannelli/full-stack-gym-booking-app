import './Home.css';
import NavBar from '../../components/NavBar/NavBar';

export default function Home() {
    return (
        <div className="bg-image">
            <NavBar />
            <div className="home-content d-flex justify-content-center align-items-center">
                <div className="container col-md-8">
                    <div className="text-center">
                        <h2 className="my-5 home-title">Welcome 👋,<br />get ready to level up your fitness game.</h2>
                        <button className="btn btn-outline-light btn-lg">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}