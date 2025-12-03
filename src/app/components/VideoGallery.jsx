import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";



const VideoGallery = () => {
    return (
      <section className="mt-8 mb-16">
        <div className="flex">
          <video
            autoPlay
            loop
            muted
            className="m-auto w-[60vw]"
            src="/assets/media/video-crowd.mp4"
          ></video>

          <video
            controls
            autoPlay
            className="m-auto hidden w-[60vw]"
            src="/assets/media/video-dj-crowd1.mp4"
          ></video>

          <video
            controls
            autoPlay
            className="m-auto hidden w-[60vw]"
            src="/assets/media/video-dj-crowd-2.mp4"
          ></video>
        </div>

        <div className="mt-4 flex justify-center gap-8">
          <button className="cursor-pointer border-2 border-white p-1 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            <IoMdArrowDropleft size={40} />
          </button>
          <button className="cursor-pointer border-2 border-white p-1 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            <IoMdArrowDropright size={40} />
          </button>
        </div>
      </section>
    );
}
 
export default VideoGallery;