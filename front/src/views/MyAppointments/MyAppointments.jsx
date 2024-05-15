import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAppointments } from '../../redux/slices'
import { Link } from 'react-router-dom'
import { Title, Appointment, NavBar, Footer } from '../../components'
import { showToast, getAppointments, cancelAppointment } from '../../helpers'

export default function MyAppointments() {
  const dispatch = useDispatch();

  const myAppointments = useSelector((state) => state.appointments.myAppointments);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    refreshAppointments();
  }, []);

  const refreshAppointments = () => {
    getAppointments(userId)
      .then((res) => {
        dispatch(setAppointments(res));
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
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
      {appointments.map(({ id, time, date, status }) => (
        <div className="col-sm-2" key={id}>
          <Appointment
            id={id}
            time={time}
            date={date}
            status={status}
            handleCancel={handleCancel}
          />
        </div>
      ))

      }
    </div>
  );

  return (
    <div className="bg-color d-flex flex-column min-vh-100">
      <NavBar />
      <Title
        title="My Appointments"
        link="/schedule"
        linkTitle="Save Your Spot"
      />
      <div className="d-flex flex-fill">
        <div className="container">
          {myAppointments.length === 0 ? (
            <div className="text-center text-white">
              <p>New here? <span><Link to="/schedule" className="link-light">Book your first class</Link></span></p>
            </div>
          ) : (
            <AppointmentList appointments={myAppointments} handleCancel={handleCancel} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}


//? Code with useState + useEffect

// import { useState, useEffect } from 'react'

// const [myAppointments, setMyAppointments] = useState([]);
// const userId = localStorage.getItem('userId');

// useEffect(() => {
//   refreshAppointments();
// }, []);

// const refreshAppointments = () => {
//   getAppointments(userId)
//     .then((res) => {
//       setMyAppointments(res);
//     })
//     .catch((err) => {
//       console.error(err.response.data);
//     });
// };

// const handleCancel = (id) => {
//   cancelAppointment(id)
//     .then(() => {
//       showToast({ text: "Appointment cancelled successfully ✅" });
//       refreshAppointments();
//     })
//     .catch((err) => {
//       console.error(err);
//       showToast({ text: "Oops! Unable to cancel appointment 🚫" });
//     });
// };