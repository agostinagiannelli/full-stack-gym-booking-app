import LinkedIn from '../../assets/icons/linkedin-white.png';
import GitHub from '../../assets/icons/github-white.png';

export default function Footer() {
    return (
        <div className="container fixed-bottom">
            <footer className="d-flex flex-wrap justify-content-between py-4">
                <div className="col-md-4 d-flex align-items-center">
                    <p className="mb-3 me-2 mb-md-0 text-white lh-1">Coded with ❤️ by Agostina Giannelli</p>
                </div>
                <ul className="col-md-4 justify-content-end list-unstyled d-flex align-items-center">
                    <li className="ms-3"><img
                        src={LinkedIn}
                        width="100%"
                        height="24"
                        alt="LinkedIn Logo"
                    /></li>
                    <li className="ms-3"><img
                        src={GitHub}
                        width="100%"
                        height="24"
                        alt="GitHub Logo"
                    /></li>
                </ul>
            </footer>
        </div>
    )
}