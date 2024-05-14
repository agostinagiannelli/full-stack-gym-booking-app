import React from 'react'
import { formatDate, formatTime } from '../../helpers/format'

export default function Appointment({ id, date, time, status, handleCancel }) {
  const statusText = status === 'active' ? 'Confirmed 👍' : 'Cancelled 👎';
  const statusColor = status === 'active' ? 'green' : 'red';
  const isDisabled = status !== 'active';

  const formattedDate = formatDate(date);
  const formattedTime = formatTime(time);

  return (
    <div className="col d-flex justify-content-center">
      <div className="card text-center mb-3 shadow-sm">
        <div className="card-body">
          <ul className="list-group list-group-flush row-gap-2">
            <li className="list-group-item"><b>Date:</b> {formattedDate}</li>
            <li className="list-group-item"><b>Time:</b> {formattedTime}</li>
            <li className="list-group-item">
              <b>Status:</b> <span style={{ color: statusColor }}>{statusText}</span>
            </li>
          </ul>
          <button className="btn btn-outline-primary btn-white w-100 mt-4 px-3" disabled={isDisabled} onClick={() => handleCancel(id)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}