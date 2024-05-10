import './NavBar.css';
import logo from '../../assets/reset-fitness-white.png';
import loginIconWhite from '../../assets/icon-login-white.png';
import logoutIconWhite from '../../assets/icon-logout-white.png';

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img
                            src={logo}
                            width="100%"
                            height="44"
                            className="d-inline-block align-top"
                            alt="Reset Fitness Logo"
                        />
                    </a>
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
                                    <a className="nav-link" href="#">Schedule</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img
                                            src={loginIconWhite}
                                            width="24"
                                            height="100%"
                                            className="d-inline-block align-top"
                                            alt="Login Icon"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}