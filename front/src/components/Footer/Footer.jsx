import LinkedIn from '../../assets/icons/linkedin-white.png'
import GitHub from '../../assets/icons/github-white.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer fixed-bottom">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between py-2">
                    <div className="col-md-4 d-flex align-items-center">
                        <p className="mb-3 me-2 mb-md-0 text-white lh-1">Coded with ❤️ by Agostina Giannelli</p>
                    </div>
                    <ul className="col-md-4 d-flex align-items-center justify-content-end list-unstyled">
                        <li className="ms-3">
                            <a href="https://www.linkedin.com/in/agostinagiannelli" target="_blank">
                                <img
                                    src={LinkedIn}
                                    width="100%"
                                    height="24"
                                    alt="LinkedIn Logo"
                                    className="iconFooter"
                                />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-body-secondary" href="https://github.com/agostinagiannelli" target="_blank">
                                <img
                                    src={GitHub}
                                    width="100%"
                                    height="24"
                                    alt="GitHub Logo"
                                    className="iconFooter"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}