import { Title, LinkButton, NavBar, Footer } from '../../components'

export default function NotFound() {
    return (
        <div className="bg-image d-flex flex-column min-vh-100">
            <NavBar />
            <Title
                title="Page Not Found"
            />
            <div className="d-flex flex-fill">
                <div className="container">
                    <div>
                        <h3 className="text-center text-white">Oops! Looks like you took a wrong turn. Let's get you back on track!</h3>
                        <div className="text-center mt-5">
                            <LinkButton link="/" text="Get Started" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}