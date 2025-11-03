import React from "react";
import EventCard from "../components/EventCard";
import "../style/Events.css";

const Events = () => {
  const events = [
    { title: "Summer Tournament", date: "June 10, 2025", description: "Open to all members." },
    { title: "Coaching Camp", date: "July 1, 2025", description: "Advanced techniques & drills." },
  ];

  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <div className="event-list">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
