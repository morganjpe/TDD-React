import React, { useState } from 'react';

// helpers
const appointmentsTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const Appointment = ({
  customer,
  service,
  stylist,
  notes,
  startsAt,
}) => {
  const { firstName, lastName, phoneNumber } = customer;
  return (
    <div>
      <h4 className="date">
        Today's appointment at {appointmentsTimeOfDay(startsAt)}
      </h4>
      <table>
        <tbody data-testid="customer-details-table">
          <tr className="customer-name">
            <td>Customer</td>
            <td>
              {firstName} {lastName}
            </td>
          </tr>
          <tr className="customer-phone-number">
            <td>Phone Number</td>
            <td>{phoneNumber}</td>
          </tr>
          <tr className="stylist">
            <td>Stylist</td>
            <td>{stylist}</td>
          </tr>
          <tr className="service">
            <td>Service</td>
            <td>{service}</td>
          </tr>
          <tr className="notes">
            <td>Notes</td>
            <td>{notes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const AppointmentsDayView = ({ appointments }) => {
  const [appointment, setAppointment] = useState(0);

  return (
    <div
      id="appointmentsDayView"
      data-testid="appointments-wrapper">
      {appointments.length ? (
        <>
          <ol>
            {appointments.map(({ startsAt }, index) => {
              return (
                <li key={startsAt}>
                  <button
                    type="button"
                    onClick={() => setAppointment(index)}>
                    {appointmentsTimeOfDay(startsAt)}
                  </button>
                </li>
              );
            })}
          </ol>
          <Appointment {...appointments[appointment]} />
        </>
      ) : (
        <p>No appointments today</p>
      )}
    </div>
  );
};
