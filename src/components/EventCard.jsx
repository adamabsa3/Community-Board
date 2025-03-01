import React from "react";

const EventCard = ({ title, date, link }) => {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <a href={link} className="btn">
        View Details
      </a>
    </div>
  );
};

export default EventCard;
