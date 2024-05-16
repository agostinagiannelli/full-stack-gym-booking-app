import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAppointments } from '../../redux/slices'
import { Link } from 'react-router-dom'
import { Title, AppointmentList, Logout, NavBar, Footer } from '../../components'
import { showToast, getUserById, cancelAppointment } from '../../helpers'

export default function MyAppointments() {
  const [sortedAppointments, setSortedAppointments] = useState([]);
  const dispatch = useDispatch();

  const myAppointments = useSelector((state) => state.appointments.myAppointments);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    if (userId) {
      refreshAppointments();
    }
  }, [userId]);

  useEffect(() => {
    sortAppointmentsByDate();
  }, [myAppointments]);

  const refreshAppointments = () => {
    getUserById(userId)
      .then((res) => {
        dispatch(setAppointments(res.appointments));
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  const sortAppointmentsByDate = () => {
    const sorted = [...myAppointments].sort((a, b) => new Date(a.date) - new Date(b.date));
    setSortedAppointments(sorted);
  };

  const handleCancel = (id) => {
    showToast({
      text: "Sure you want to cancel? Click to confirm 💪",
      onClick: () => {
        cancelAppointment(id)
          .then(() => {
            showToast({ text: "Appointment cancelled successfully ✅" });
            refreshAppointments();
          })
          .catch((err) => {
            console.error(err);
            showToast({ text: "Oops! Unable to cancel appointment 🚫" });
          });
      }
    })
  };

  return (
    <div className="bg-color d-flex flex-column min-vh-100">
      <NavBar />
      <Title
        title="My Appointments"
        link="/schedule"
        linkTitle="Save Your Spot"
      />
      {userId ? (<div className="d-flex flex-fill">
        <div className="container">
          {sortedAppointments.length === 0 ? (
            <div className="text-center text-white">
              <p>New here? <span><Link to="/schedule" className="link-light">Book your first class</Link></span></p>
            </div>
          ) : (
            <AppointmentList appointments={sortedAppointments} handleCancel={handleCancel} />
          )}
        </div>
      </div>
      ) : (
        <Logout />
      )}
      <Footer />
    </div>
  )
}

//? Code with localStorage

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