import { Appointment } from '../../components'

export default function AppointmentList({ appointments, handleCancel }) {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
            {appointments.map(({ id, time, date, status }) => (
                <div className="col-12" key={id}>
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
    )
}