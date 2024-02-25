// HospitalDetails.js
import React from 'react';

const HospitalDetails = ({ place }) => {
  return (
    <div className="hospital-details">
      <h3>{place.name}</h3>
      <p>{place.vicinity}</p>
      {/* You can add more details here, such as ratings, open status, etc. */}
    </div>
  );
};

export default HospitalDetails;
