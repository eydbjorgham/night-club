"use client";
import { useState, useEffect } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 2;

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:4000/events");
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const startIndex = currentPage * eventsPerPage;
  const displayedEvents = events.slice(startIndex, startIndex + eventsPerPage);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <div>
      <div className="mt-(--section-padding) flex justify-center gap-5">
        {displayedEvents.map((event) => (
          <div key={event.id}>
              <img
              src={event.asset.url}
              alt={event.title}
              width={500}
              height={500}
              className="object-cover w-full h-auto"
              />
              <div className="flex gap-5 bg-(--tertiary-color) p-2 text-white">
              <p>{event.date.split('T')[0]}</p>
              <p>{event.time}</p> {/* API'et har ikke noget tid */}
              <p>{event.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-(--padding) flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={
              index === currentPage
                ? "h-3 w-3 bg-(--tertiary-color)"
                : "h-3 w-3 bg-(--secondary-color)"
            }
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Events;
