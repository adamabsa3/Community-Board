import React from "react";
import EventCard from "./EventCard";

const events = [
  { id: 1, title: "Hackathon 2025", date: "March 10, 2025", link: "#" },
  { id: 2, title: "React Meetup", date: "April 5, 2025", link: "#" },
  { id: 3, title: "AI Conference", date: "May 15, 2025", link: "#" },
  { id: 4, title: "JavaScript Workshop", date: "June 1, 2025", link: "#" },
  { id: 5, title: "Web3 Summit", date: "July 20, 2025", link: "#" },
  { id: 6, title: "Cybersecurity Expo", date: "August 5, 2025", link: "#" },
  { id: 7, title: "Python Bootcamp", date: "September 10, 2025", link: "#" },
  { id: 8, title: "Node.js Conference", date: "October 15, 2025", link: "#" },
  { id: 9, title: "Cloud Computing Summit", date: "November 22, 2025", link: "#" },
  { id: 10, title: "Tech Startup Fair", date: "December 5, 2025", link: "#" },
];

const EventList = () => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} title={event.title} date={event.date} link={event.link} />
      ))}
    </div>
  );
};

export default EventList;
