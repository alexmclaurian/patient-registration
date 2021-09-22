import React from 'react';
import PropTypes from 'prop-types';

function Confirmation({ data }) {
  const convertedDate = data.dob.toISOString().substring(0, 10);

  return (
    <div>
      <h1>Confirmation Page</h1>
      <p>
        Name:
        {data.name}
      </p>
      <p>
        Email:
        {data.email}
      </p>
      <p>
        Address:
        {data.address}
      </p>
      <p>
        Appointment Time:
        {data.apptTime}
      </p>
      <p>
        Phone:
        {data.phone}
      </p>
      <p>
        DoB:
        {convertedDate}
      </p>
    </div>
  );
}

Confirmation.propTypes = {
  data: PropTypes.shape({
    root: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    apptTime: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    dob: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default Confirmation;
