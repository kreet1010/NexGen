import React from "react";
import CoachCard from "../components/CoachCard";
import "../style/Coaches.css";

const Coaches = () => {
  const coaches = [
    { name: "John Smith", experience: 10, specialty: "Serve & Volley" },
    { name: "Emily Davis", experience: 8, specialty: "Baseline Control" },
  ];

  return (
    <div className="coaches">
      <h1>Meet Our Coaches</h1>
      <div className="coach-list">
        {coaches.map((coach, index) => (
          <CoachCard key={index} {...coach} />
        ))}
      </div>
    </div>
  );
};

export default Coaches;
