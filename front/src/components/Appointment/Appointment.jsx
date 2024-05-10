export default function Appointment({ id, date, time, status }) {
  status === 'active' ? status = 'Confirmed 👍' : status = 'Cancelled 👎'
  const statusText = status === 'Confirmed 👍' ? 'green' : 'red';
  const isDisabled = status === 'Cancelled 👎';

  return (
    <div className="col d-flex justify-content-center">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Appointment #{id}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Date:</b> {date}</li>
            <li className="list-group-item"><b>Time:</b> {time}</li>
            <li className="list-group-item">
              <b>Status:</b> <span style={{ color: statusText }}>{status}</span>
            </li>
          </ul>
          <button className="btn btn-outline-primary" disabled={isDisabled}>Cancel</button>
        </div>
      </div>
    </div>
  )
}