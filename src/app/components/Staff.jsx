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
    <div>
      {displayedStaff.map((staff) => (
        <div
          key={staff.id}
          className="mt-(--section-padding) flex flex-col items-center gap-5"
        >
          <img
            src={staff.asset.url}
            alt={staff.name}
            width={150}
            height={150}
          />
          <h2 className="font-semibold text-(--secondary-color)">
            {staff.name}
          </h2>
          <p className="max-w-4xl text-center leading-10 text-(--secondary-color)">
            {staff.content}
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="transition-duration-300 border-2 text-(--secondary-color) border-white p-2 transition hover:border-(--tertiary-color) hover:text-(--tertiary-color)">
              <FaFacebookF size={20} />
            </div>
            <div className="transition-duration-300 border-2 text-(--secondary-color) border-white p-2 transition hover:border-(--tertiary-color) hover:text-(--tertiary-color)">
              <FaTwitter size={20} />
            </div>
            <div className="group transition-duration-300 border-2 text-(--secondary-color) border-white p-2 transition hover:border-(--tertiary-color) hover:text-(--tertiary-color)">
              <FaSnapchatGhost size={20} />
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
        </div>
      ))}
    </div>
  );
};

export default Staff;
