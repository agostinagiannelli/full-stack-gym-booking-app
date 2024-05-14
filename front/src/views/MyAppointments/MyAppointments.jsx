import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { showToast } from '../../helpers/showToast'
import { cancelAppointment } from '../../helpers/axios'
import Title from '../../components/Title/Title'
import Appointment from '../../components/Appointment/Appointment'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function MyAppointments() {
  const [myAppointments, setMyAppointments] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    refreshAppointments();
  }, []);

  const refreshAppointments = () => {
    axios.get(`http://localhost:3000/appointments?userId=${userId}`)
      .then((res) => {
        setMyAppointments(res.data);
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  const handleCancel = (id) => {
    cancelAppointment(id)
      .then(() => {
        showToast({ text: "Appointment cancelled successfully ✅" });
        refreshAppointments();
      })
      .catch((err) => {
        console.error(err);
        showToast({ text: "Oops! Unable to cancel appointment 🚫" });
      });
  };

  const AppointmentList = ({ appointments, handleCancel }) => (
    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-3 pb-5">
      {appointments.map(({ id, time, date, status }) => (
        <div className="row" key={id}>
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
  );

  return (
    <div className='bg-color'>
      <NavBar />
      <Title
        title="My Appointments"
        link="/schedule"
        linkTitle="Save Your Spot"
      />
      <div className="container">
        {myAppointments.length === 0 ? (
          <div className="text-center text-white">
            <p>New here? <span><Link to="/schedule" className="link-light">Book your first class</Link></span></p>
          </div>
        ) : (
          <AppointmentList appointments={myAppointments} handleCancel={handleCancel} />
        )}
      </div>
      <Footer />
    </div>
  );
}