import { LinkButton } from '../../components'

export default function Title({ title, link, linkTitle }) {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <div className="text-center mb-5">
                    <h2 className="my-5 page-title">{title}</h2>
                    {link && linkTitle && (
                        <LinkButton link={link} text={linkTitle} />
                    )}
                </div>
            </div>
        </div>
    )
}