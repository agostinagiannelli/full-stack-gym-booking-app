import appointments from '../../helpers/appointments'
import Appointment from '../../components/Appointment/Appointment'
import { useState } from 'react'

export default function MyAppointments() {
  const [myAppointments, setMyAppointments] = useState(appointments)

  function getAppointments() {
    setMyAppointments(appointments)
  }

  return (
    <>
      <h2>My Appointments</h2>
      <div>
        {appointments.map(
          (appointment) => {
            return <Appointment
              time={appointment.time}
              date={appointment.date}
              status={appointment.status}
              key={appointment.id} />
          }
        )}
      </div>
    </>
  )
}
