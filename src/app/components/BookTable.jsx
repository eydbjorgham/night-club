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
    <div className="m-auto grid w-[80vw] grid-cols-5 grid-rows-3 gap-4 pt-16 pb-32">
      {tables.map((table, index) => {
        const tableNumber = index + 1;
        const booked = isTableBooked(tableNumber);

        return booked ? (
          <div key={index} className="relative cursor-not-allowed opacity-50">
            <img src={table} alt={`table ${tableNumber}`} />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl font-bold text-white">
              {tableNumber}
            </span>
            <span className="absolute uppercase top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-red-500">
              reserved
            </span>
          </div>
        ) : (
          <div
            key={index}
            className="relative cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => onTableSelect(tableNumber)}
          >
            <img src={table} alt={`table ${tableNumber}`} />
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
