// I dette komponent er der blevet gjort brug af AI til at få animationer til at ligne som figma designet.
// AI er aldrig blevet brugt til at skrive hele koden, blot som et værktøj til at huske på alle de forskellige <tags> og bidrage med små dele af koden.

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Her blev der promptet til AI hvordan man kunne lave en mobil version med 1 eventcard og desktop version med 2 eventcards
const Events = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
// Herefter kom vi på at vi skulle bruge en state til at holde styr på om det er mobil eller desktop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Her opretter vi en funktion der tjekker vinduets bredde for at sætte isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Her tilføjede vi så en event listener der lytter efter ændringer i vinduets størrelse,
    // og opdaterer isMobile state baseret på om skærmen er mobil eller desktop
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:4000/events");
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);


  // Her blev der promptet til AI at lave en mobil version med 1 eventcard og desktop version med 2 eventcards
  const eventsPerPage = isMobile ? 1 : 2;
  const startIndex = currentPage * eventsPerPage;
  const displayedEvents = events.slice(startIndex, startIndex + eventsPerPage);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <>
      <div

        className="mt-(--section-padding) flex justify-center px-5 sm:px-0"
      >
        <div className="overflow-hidden pt-8 sm:max-w-6xl">
          <motion.div
            animate={{ x: -currentPage * (100 + (isMobile ? 2 : 3)) + "%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex items-center gap-2 sm:gap-5"
          >
            {events.map((event) => (
              <div
                key={event.id}
                className={`group relative flex shrink-0 flex-col ${
                  isMobile ? "w-full" : "w-1/2"
                }`}
              >
                <div className="absolute inset-0 bg-(--tertiary-color) opacity-0 group-hover:opacity-100"></div>

                <motion.div
                  className="relative w-full"
                  // Her blev der promptet til AI om der ikke er en anden funktion i framer motion udover 'animate' og den kom så med 'whileHover'
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

                  {/* Border mobil */}
                  <motion.div
                    variants={{
                      initial: {
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 80px)",
                      },
                      hover: {
                        clipPath:
                          "polygon(80px 0, 100% 0, 100% 100%, 0 100%, 0 80px)",
                      },
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 z-10 hidden border-t border-b border-(--tertiary-color) group-hover:flex sm:hidden"
                  ></motion.div>

                  {/* Border desktop */}
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
                    className="absolute inset-0 z-10 hidden border-t border-b border-(--tertiary-color) bg-(--primary-color) opacity-70 sm:group-hover:flex"
                  ></motion.div>

                  {/* Tekst BOX */}
                  <div
                    className="absolute top-53 z-20 hidden w-full flex-col bg-(--primary-color) p-2 group-hover:flex sm:top-62.5 sm:pt-7 sm:pb-7 sm:pl-5"
                    style={{
                      clipPath: isMobile
                        ? "none"
                        : "polygon(0 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%)",
                    }}
                  >
                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 50 },
                        hover: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h1 className="text-md font-semibold text-(--secondary-color) uppercase sm:text-xl">
                        night club
                      </h1>
                      <p className="max-w-[400px] text-xs leading-6 text-(--secondary-color) sm:max-w-lg sm:text-sm">
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
                    className="absolute top-20 left-40 z-20 bg-(--tertiary-color) p-4 text-lg text-(--secondary-color) transition-all duration-300 ease-in-out hover:bg-white hover:text-(--tertiary-color) sm:left-55"
                  >
                    <button>Book Now</button>
                  </motion.div>
                </motion.div>
                <div className="z-20 flex gap-5 bg-(--tertiary-color) p-2 pl-4 text-lg text-white">
                  <p>{event.date.split("T")[0]}</p>
                  <p>{event.time}</p>
                  <p>{event.location}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-(--padding) pb-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-3 w-3 cursor-pointer ${
              index === currentPage
                ? "bg-(--tertiary-color)"
                : "bg-(--secondary-color)"
            }`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default Events;
