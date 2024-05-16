import { Link } from 'react-router-dom'
import { LoginNavBar } from '../../components'
import logo from '../../assets/img/reset-fitness-white.png'
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                < Link to="/" className="navbar-brand" >
                    <img
                        src={logo}
                        width="100%"
                        height="44"
                        alt="Reset Fitness Logo"
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav nav-underline justify-content-end flex-grow-1 pe-3 desktop-center">
                            <li className="nav-item">
                                <Link to="/about-us" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pricing" className="nav-link">Pricing</Link>
                            </li>
                            <LoginNavBar />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}