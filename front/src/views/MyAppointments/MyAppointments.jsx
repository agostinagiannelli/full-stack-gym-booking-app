import { useEffect, useState } from 'react'
import axios from 'axios'
import { showToast } from '../../helpers/showToast'
import { cancelAppointment } from '../../helpers/axios'
import Title from '../../components/Title/Title'
import Appointment from '../../components/Appointment/Appointment'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function MyAppointments() {
  const [myAppointments, setMyAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/appointments')
      .then((res) => {
        setMyAppointments(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  const handleCancel = (id) => {
    cancelAppointment(id)
      .then((res) => {
        showToast({ text: "Appointment cancelled successfully ✅" }, { destination: "" });
      })
      .catch((err) => {
        console.error(err);
        showToast({ text: "Oops! Unable to cancel appointment 🚫" }, { destination: "" });
      })
  };

  return (
    <div className='bg-color'>
      <NavBar />
      <Title
        title="My Appointments"
        link="/schedule"
        linkTitle="Save Your Spot"
      />
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3 pb-5">
          {myAppointments.map(({ id, time, date, status }) => (
            <div className="col" key={id}>
              <Appointment
                id={id}
                time={time}
                date={date}
                status={status}
                handleCancel={handleCancel}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}