import { Link } from 'react-router-dom'

export default function LinkButton({ link, text }) {
    return (
        <Link to={link} className="btn btn-outline-light btn-lg btn-blue px-5">
            {text}
        </Link>
    )
}