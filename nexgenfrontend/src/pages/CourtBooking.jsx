import React from "react";
import CourtBookingCard from "../components/CourtBookingCard";
import "../style/CourtBooking.css";

const CourtBooking = () => {
  const courts = [
    { courtName: "Court 1", availability: "Available" },
    { courtName: "Court 2", availability: "Booked" },
  ];

  return (
    <div className="court-booking">
      <h1>Book a Court</h1>
      <div className="court-list">
        {courts.map((court, index) => (
          <CourtBookingCard key={index} {...court} />
        ))}
      </div>
    </div>
  );
};

export default CourtBooking;
