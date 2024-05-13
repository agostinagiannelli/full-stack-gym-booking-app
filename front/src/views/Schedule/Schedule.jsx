import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';

export default function Schedule() {
    return (
        <div className='bg-color'>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="text-center mb-5">
                        <h2 className="my-5 page-title">Schedule</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col d-flex justify-content-center">
                    <div className="card text-center mb-3 p-3">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Monday</h5>
                            <ul className="list-group list-group-flush row-gap-2">
                                <li className="list-group-item">7:00 to 8:00</li>
                                <li className="list-group-item">Time:</li>
                                <li className="list-group-item">Time:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
