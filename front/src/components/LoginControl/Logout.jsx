import { Link } from 'react-router-dom'

export default function Logout() {
    return (
        <div className="d-flex flex-fill">
            <div className="container">
                <div className="text-center text-white">
                    <p>Ready to smash your fitness journey? <span><Link to="/auth/login" className="link-light">Log in now!</Link></span></p>
                </div>
            </div>
        </div>
    )
}