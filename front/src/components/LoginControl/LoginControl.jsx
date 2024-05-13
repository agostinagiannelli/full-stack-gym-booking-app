import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import loginIconWhite from '../../assets/icons/icon-login-white.png'
import logoutIconWhite from '../../assets/icons/icon-logout-white.png'

export default function LoginControl() {
    const [userId, setUserId] = useState('');
    
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        setUserId(storedUserId);
    }, []);

    return (
        <li className="nav-item">
            <Link to="/login" className="nav-link">
                <img
                    src={userId ? logoutIconWhite : loginIconWhite}
                    width="24"
                    height="100%"
                    className="d-inline-block align-top"
                    alt="Login Icon"
                />
            </Link>
        </li>
    );
}