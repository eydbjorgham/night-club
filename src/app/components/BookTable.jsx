"use client";
import { useEffect, useState } from "react";
const BookTable = ({ onTableSelect }) => {
  const tables = [
    "/assets/table/table_1.png",
    "/assets/table/table_1.png",
    "/assets/table/table_2.png",
    "/assets/table/table_1.png",
    "/assets/table/table_3.png",
    "/assets/table/table_1.png",
    "/assets/table/table_1.png",
    "/assets/table/table_2.png",
    "/assets/table/table_1.png",
    "/assets/table/table_3.png",
    "/assets/table/table_1.png",
    "/assets/table/table_1.png",
    "/assets/table/table_2.png",
    "/assets/table/table_1.png",
    "/assets/table/table_3.png",
  ];
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch("http://localhost:4000/reservations");
      const data = await response.json();
      setReservations(data);
    };

    /* Prompt: "Jeg skal mappe over tables og for hver table tjekke isTableBooked(tableNumber). Den skal kunne reserveres hvis den ikke i forvejen er booked, og ligeledes ikke reserveres hvis den er booked. Hvordan kan jeg tilgå dette?" */
    /* AI svar: Du bruger en ternary operator (betinget operator) inde i .map(). Her er strukturen:

Hvad skal du gøre:

Indside .map(): Beregn const booked = isTableBooked(tableNumber) for hver iteration
Brug ternary: booked ? <disabled div> : <clickable div>
Disabled div: Skal have opacity-50, cursor-not-allowed og ingen onClick
Clickable div: Skal have cursor-pointer, hover:scale-110 og onClick={() => onTableSelect(tableNumber)}
Vigtig detalje:

Både divs skal vise table-nummeret
Kun den disabled skal vise "reserved" tekst
Den clickable skal være interaktiv
Prøv at implementere det, og hvis du får problemer, kan vi debugge sammen! */

    fetchReservations();
  }, []);
  const isTableBooked = (tableNumber) => {
    let booked = false;
    reservations.forEach((res) => {
      if (res.table == tableNumber) {
        booked = true;
      }
    });
    return booked;
  };

  return (
    <div className="m-auto grid w-[80vw] grid-cols-5 grid-rows-3 gap-4 pt-16 pb-32 max-sm:grid-cols-1">
      {tables.map((table, index) => {
        const tableNumber = index + 1;
        const booked = isTableBooked(tableNumber);

        return booked ? (
          <div key={index} className="relative cursor-not-allowed opacity-50">
            <img
              src={table}
              alt={`table ${tableNumber}`}
              className="block w-full"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl font-bold text-white">
              {tableNumber}
            </span>
            <span className="text-l absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-red-500 uppercase">
              reserved
            </span>
          </div>
        ) : (
          <div
            key={index}
            className="relative cursor-pointer transition-transform duration-300 hover:scale-110 max-sm:scale-100 max-sm:hover:scale-100"
            onClick={() => onTableSelect(tableNumber)}
          >
            <img
              src={table}
              alt={`table ${tableNumber}`}
              className="block w-full"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl font-bold text-white">
              {tableNumber}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BookTable;
