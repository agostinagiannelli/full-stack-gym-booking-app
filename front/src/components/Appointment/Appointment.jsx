import { showToast } from '../../helpers/showToast'
import { cancelAppointment } from '../../helpers/axios'

export default function Appointment({ id, date, time, status }) {
  status === 'active' ? status = 'Confirmed 👍' : status = 'Cancelled 👎'
  const statusText = status === 'Confirmed 👍' ? 'green' : 'red';
  const isDisabled = status === 'Cancelled 👎';

  const handleCancel = async (id) => {
    try {
      await cancelAppointment(id);
      showToast({ text: "Appointment cancelled successfully ✅" }, { destination: "" });
    } catch (err) {
      showToast({ text: "Oops! Unable to cancel appointment ❌" }, { destination: "" });
      console.error(err);
    }
  };

  return (
    <div className="col d-flex justify-content-center">
      <div className="card text-center mb-3 p-3">
        <div className="card-body">
          <h5 className="card-title mb-4">Appointment #{id}</h5>
          <ul className="list-group list-group-flush row-gap-2">
            <li className="list-group-item"><b>Date:</b> {date}</li>
            <li className="list-group-item"><b>Time:</b> {time}</li>
            <li className="list-group-item">
              <b>Status:</b> <span style={{ color: statusText }}>{status}</span>
            </li>
          </ul>
          <button className="btn btn-outline-primary btn-white mt-4 px-5" disabled={isDisabled} onClick={() => handleCancel(id)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}