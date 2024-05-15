import { Link } from 'react-router-dom'
import LinkedIn from '../../assets/icons/linkedin-white.png'
import GitHub from '../../assets/icons/github-white.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between py-2">
                    <div className="col-md-4 d-flex align-items-center">
                        <p className="mb-3 me-2 mb-md-0 text-white lh-1">Coded with ❤️ by Agostina Giannelli</p>
                    </div>
                    <ul className="col-md-4 d-flex align-items-center justify-content-end list-unstyled">
                        <li className="ms-3">
                            < Link
                                to="https://www.linkedin.com/in/agostinagiannelli"
                                className="text-body-secondary"
                                target="_blank"
                                rel="noopener noreferrer" >
                                <img
                                    src={LinkedIn}
                                    width="100%"
                                    height="24"
                                    alt="GitHub Logo"
                                    className="iconFooter"
                                />
                            </Link>
                        </li>
                        <li className="ms-3">
                            < Link
                                to="https://github.com/agostinagiannelli"
                                className="text-body-secondary"
                                target="_blank"
                                rel="noopener noreferrer" >
                                <img
                                    src={GitHub}
                                    width="100%"
                                    height="24"
                                    alt="GitHub Logo"
                                    className="iconFooter"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}