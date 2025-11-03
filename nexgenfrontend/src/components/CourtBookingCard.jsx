import React from "react";
import "../style/CourtBooking.css";

const CourtBookingCard = ({ courtName, availability }) => {
  return (
    <div className="court-card">
      <h3>{courtName}</h3>
      <p>Availability: {availability}</p>
      <button>Book Now</button>
    </div>
  );
};

export default CourtBookingCard;
