import { useState, useEffect } from 'react';
import loginIconWhite from '../../assets/icons/icon-login-white.png';
import logoutIconWhite from '../../assets/icons/icon-logout-white.png';

export default function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState('');

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    useEffect(() => {
        setUser(localStorage.getItem('userId'));
    }, [user]);

    return (
        <div>Login Control</div>
    )
}