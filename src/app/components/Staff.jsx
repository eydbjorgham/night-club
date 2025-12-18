"use client";
import { useState, useEffect } from "react";

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const Staff = () => {
  const [staffList, setStaffList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const staffPerPage = 1;

  useEffect(() => {
    const fetchStaff = async () =>{
      const response = await fetch("http://localhost:4000/testimonials");
      const staffList = await response.json();
      setStaffList(staffList);
    }
    fetchStaff();
  }, []);

  const startIndex = currentPage * staffPerPage;
  const displayedStaff = staffList.slice(startIndex, startIndex + staffPerPage);
  const totalPages = Math.ceil(staffList.length / staffPerPage);
  
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.9)), url('/assets/bg/footerbg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "noRepeat",
      }}
    >
      {displayedStaff.map((staff) => (
        <div
          key={staff.id}
          className="mt-(--overskrift-padding-top) pt-8 flex flex-col items-center gap-5"
        >
          <img
            src={staff.asset.url}
            alt={staff.name}
            width={150}
            height={150}
          />
          <h2 className="text-xl font-semibold text-(--secondary-color)">
            {staff.name}
          </h2>
          <p className="max-w-sm text-center leading-10 text-(--secondary-color) sm:max-w-3xl">
            {staff.content}
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="transition-duration-300 cursor-pointer border-2 border-white p-2 text-(--secondary-color) transition hover:bg-(--secondary-color) hover:text-(--primary-color)">
              <FaFacebookF size={20} />
            </div>
            <div className="transition-duration-300 cursor-pointer border-2 border-white p-2 text-(--secondary-color) transition hover:bg-(--secondary-color) hover:text-(--primary-color)">
              <FaTwitter size={20} />
            </div>
            <div className="group transition-duration-300 cursor-pointer border-2 border-white p-2 text-(--secondary-color) transition hover:bg-(--secondary-color) hover:text-(--primary-color)">
              <FaSnapchatGhost size={20} />
            </div>
          </div>

          <div className="mt-(--padding) flex justify-center gap-2">
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
        </div>
      ))}
    </div>
  );
};

export default Staff;
