import { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/reset-fitness-white.png';
import loginIcon from '../../assets/icon-login.png';
import logoutIcon from '../../assets/icon-logout.png';

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <a className="navbar-brand" href="">
                    <img
                        src={logo}
                        width="100%"
                        height="44"
                        className="d-inline-block align-top"
                        alt="Reset Fitness Logo"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleToggle}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={expanded ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav nav-underline ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link navbar-text" href="#schedule">Schedule</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-text" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-text" href="#aboutUs">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#login">
                                <img
                                    src={loginIcon}
                                    width="100%"
                                    height="24"
                                    className="d-inline-block align-top"
                                    alt="Login Icon"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}