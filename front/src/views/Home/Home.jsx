import './Home.css';
import NavBar from '../../components/NavBar/NavBar';

export default function Home() {
    return (
        <div className="bg-image">
            <NavBar />
            <div className="title d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="text-center">
                        <h2 className="my-5">Welcome, get ready to level up your fitness game.</h2>
                        <button className="btn btn-outline-light btn-lg">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}