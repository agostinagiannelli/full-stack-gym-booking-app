import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { showToast } from '../../helpers'
import loginIconWhite from '../../assets/icons/icon-login-white.png'
import logoutIconWhite from '../../assets/icons/icon-logout-white.png'

export default function LoginControl() {
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    }, []);

    const handleLogout = () => {
        showToast({
            text: "Leaving so soon? Click to confirm your exit 👋",
            onClick: () => {
                localStorage.removeItem('userId');
                setUserId('');
                navigate('/');
                showToast({ text: "Logged out successfully! See you next workout 💪" });
            }
        });
    };

    return (
        <>
            {userId && (
                <li className="nav-item">
                    <Link to="/my-appointments" className="nav-link">My Appointments</Link>
                </li>
            )}
            <li className="nav-item">
                <Link to={userId ? null : "/auth/login"} className="nav-link">
                    <img
                        src={userId ? logoutIconWhite : loginIconWhite}
                        width="24"
                        height="100%"
                        className="d-inline-block align-top"
                        alt="Login Icon"
                        onClick={userId ? handleLogout : null}
                    />
                </Link>
            </li>
        </>
    )
}