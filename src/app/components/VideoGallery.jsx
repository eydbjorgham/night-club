"use client";
import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

const VideoGallery = () => {
  const videoer = [
    "/assets/media/video-crowd.mp4",
    "/assets/media/video-dj-crowd1.mp4",
    "/assets/media/video-dj-crowd-2.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const previousVideo = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
console.log(currentIndex);

  return (
    <section className="mt-8 mb-16">
      <div className="m-auto flex w-[60vw] justify-center bg-(--tertiary-color)">
        <video
          key={currentIndex}
          autoPlay
          loop
          muted
          className="m-auto w-[60vw] [clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)]"
          src={videoer[currentIndex]}
        ></video>
      </div>

      <div className="mt-4 flex justify-center gap-8">
        <button
          onClick={previousVideo}
          className="cursor-pointer border-2 border-white p-1 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          <IoMdArrowDropleft size={40} />
        </button>
        <button
          onClick={nextVideo}
          className="cursor-pointer border-2 border-white p-1 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          <IoMdArrowDropright size={40} />
        </button>
      </div>
    </section>
  );
};

export default VideoGallery;
