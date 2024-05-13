import Title from '../../components/Title/Title'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function Timetable() {
    return (
        <div className='bg-color'>
            <NavBar />
            <Title 
            title="Timetable" 
            />
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