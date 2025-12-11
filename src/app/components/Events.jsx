"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <>
      <div className="mt-(--section-padding) flex justify-center">
        <div className="w-full max-w-6xl overflow-hidden">
          <motion.div
            animate={{ x: -currentPage * 103 + "%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex gap-5"
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="group relative flex min-w-[50%] shrink-0 flex-col"
              >
                <div className="absolute inset-0 bg-(--tertiary-color) opacity-0 group-hover:opacity-100"></div>

                <motion.div
                  className="relative w-full"
                  whileHover="hover"
                  initial="initial"
                >
                  <img
                    src={event.asset.url}
                    alt={event.title}
                    width={300}
                    height={300}
                    className="h-auto w-full object-cover group-hover:[clip-path:polygon(80px_0,100%_0,100%_calc(100%-80px),calc(100%-80px)_100%,0_100%,0_80px)]"
                  />

                  {/*Border*/}
                  <motion.div
                    variants={{
                      initial: {
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 0)",
                      },
                      hover: {
                        clipPath:
                          "polygon(80px 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%, 0 80px)",
                      },
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 z-10 hidden border-t border-b border-(--tertiary-color) bg-(--primary-color) text-(--secondary-color) opacity-70 group-hover:flex"
                  ></motion.div>

                  {/* Tekst BOX */}
                  <div
                    className="absolute top-62.5 z-20 hidden w-full flex-col bg-(--primary-color) pt-7 pb-7 pl-5 group-hover:flex"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%)",
                    }}
                  >
                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 50 },
                        hover: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h1 className="text-xl font-semibold text-(--secondary-color) uppercase">
                        night club
                      </h1>
                      <p className="max-w-lg text-sm leading-6 text-(--secondary-color)">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                    </motion.div>
                  </div>

                  {/* Knap */}
                  <motion.div
                    variants={{
                      initial: { y: -40, opacity: 0 },
                      hover: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    className="absolute top-20 left-55 z-20 bg-(--tertiary-color) p-4 text-lg text-(--secondary-color) transition-all duration-300 ease-in-out hover:bg-white hover:text-(--tertiary-color)"
                  >
                    <button>Book Now</button>
                  </motion.div>
                </motion.div>
                <div className="flex gap-5 bg-(--tertiary-color) p-2 pl-4 text-lg text-white">
                  <p>{event.date.split("T")[0]}</p>
                  <p>{event.time}</p>
                  <p>{event.location}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
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
    </>
  );
};

export default Events;
