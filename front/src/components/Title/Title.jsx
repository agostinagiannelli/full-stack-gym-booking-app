import { useSelector } from 'react-redux'
import { LinkButton } from '../../components'

export default function Title({ title, link, linkTitle }) {
    const userName = useSelector((state) => state.user.userName);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <div className="text-center my-5">
                    {userName && <p className="text-center text-white">Hi there, {userName}!</p>}
                    <h2 className="mb-5 page-title">{title}</h2>
                    {link && linkTitle && (
                        <LinkButton link={link} text={linkTitle} />
                    )}
                </div>
            </div>
        </div>
    )
}