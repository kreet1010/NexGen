import React from "react";
import "../style/Coaches.css";

const CoachCard = ({ name, experience, specialty }) => {
  return (
    <div className="coach-card">
      <h3>{name}</h3>
      <p>{experience} years experience</p>
      <p>Specialty: {specialty}</p>
    </div>
  );
};

export default CoachCard;
