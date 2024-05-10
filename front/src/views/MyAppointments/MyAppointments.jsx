import { useEffect, useState } from 'react'
import axios from 'axios'
import './MyAppointments.css'
import NavBar from '../../components/NavBar/NavBar'
import Appointment from '../../components/Appointment/Appointment'

export default function MyAppointments() {
  const [myAppointments, setMyAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/appointments')
      .then((res) => {
        setMyAppointments(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='bg-color'>
      <NavBar />
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="text-center">
            <h2 className="my-5">My Appointments</h2>
            <button className="btn btn-outline-light btn-lg">Save Your Spot</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {myAppointments.map(({ id, time, date, status }) => (
            <div className="col" key={id}>
              <Appointment
                id={id}
                time={time}
                date={date}
                status={status}
                setMyAppointments={setMyAppointments}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}