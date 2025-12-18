"use client";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { FaShuffle } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

import { useState, useRef } from "react";

export default function MusicGallery() {
  const tracks = [
    {
      text: "Euphoria",
      image: "/assets/content-img/track_thumb.jpg",
      audio: "/assets/media/euphoria.mp3",
    },
    {
      text: "You belong with me",
      image: "/assets/content-img/track1.jpg",
      audio: "/assets/media/black-box-funky.mp3",
    },
    {
      text: "Fashion red tape",
      image: "/assets/content-img/track2.jpg",
      audio: "/assets/media/fashion-red-tape.mp3",
    },
    {
      text: "Euphoria",
      image: "/assets/content-img/track4.jpg",
      audio: "/assets/media/euphoria.mp3",
    },
    {
      text: "You belong with me",
      image: "/assets/content-img/track5.jpg",
      audio: "/assets/media/black-box-funky.mp3",
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(
    "/assets/content-img/track_thumb.jpg",
  );
  const [activeTrack, setActiveTrack] = useState("/assets/media/euphoria.mp3");
  const [activeText, setActiveText] = useState("Euphoria");

  const handleTrackChange = (imageSrc, audioSrc, index, text) => {
    setActiveImage(imageSrc);
    setActiveTrack(audioSrc);
    setCurrentTrackIndex(index);
    setActiveText(text);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  };

  const handlePrevTrack = () => {
    const prevIndex =
      currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    const prevTrack = tracks[prevIndex];
    handleTrackChange(
      prevTrack.image,
      prevTrack.audio,
      prevIndex,
      prevTrack.text,
    );
  };

  const handleNextTrack = () => {
    const nextIndex =
      currentTrackIndex === tracks.length - 1 ? 0 : currentTrackIndex + 1;
    const nextTrack = tracks[nextIndex];
    handleTrackChange(
      nextTrack.image,
      nextTrack.audio,
      nextIndex,
      nextTrack.text,
    );
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  /* Prompt: "Hvordan finder jeg ud af varigheden for hver individuel sang, når brugeren skifter mellem trackene?"*/
  /* AI svar: "Først skal du definere en handleLoadedMetadata-funktion der henter duration fra audioRef.current.duration og gemmer det i state med setDuration(). Derefter tilføjer du onLoadedMetadata={handleLoadedMetadata} til audio-elementet, så funktionen triggeres når metadata loader. Så har du duration gemt i state, som du kan bruge til beregninger senere."
 */

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    if (newVolume > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div>
      <audio
        ref={audioRef}
        src={activeTrack}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="m-auto flex w-[80%] max-sm:flex-col">
        <div>
          <img
            src={activeImage}
            alt="Active track"
            className="h-auto w-auto object-cover max-sm:hidden"
          />
        </div>
        <div className="m-auto w-full align-middle max-sm:order-first">
          <div className="mr-10 mb-2 text-center text-white max-sm:mr-0">
            <h3 className="text-lg font-semibold">{activeText}</h3>
          </div>
          <div className="relative m-auto mb-4 h-1 w-[80%] rounded-full bg-(--tertiary-color) max-sm:w-[100%]">
            <div
              className="absolute h-full bg-white transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
            <div
              className="absolute top-3 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-lg transition-all duration-300"
              style={{
                left: `${progressPercent}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
          <div className="flex justify-evenly max-sm:flex-col max-sm:gap-6">
            <div className="mb-4 flex flex-1 justify-center gap-2 text-sm text-white">
              <span>{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="flex flex-1 justify-center gap-4">
              <button className="cursor-pointer" onClick={handlePrevTrack}>
                <TbPlayerTrackPrevFilled size={33} className="text-white" />
              </button>
              <button
                className="cursor-pointer"
                onClick={togglePlay}
                src="/assets/icon/Play.svg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-3 border-white">
                  {isPlaying ? (
                    <FaPause size={30} className="text-white" />
                  ) : (
                    <FaPlay size={30} className="p-1 text-white" />
                  )}
                </div>
              </button>
              <button className="cursor-pointer" onClick={handleNextTrack}>
                <TbPlayerTrackNextFilled size={33} className="text-white" />
              </button>
              <button className="cursor-pointer">
                <FaShuffle size={25} className="text-white" />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center gap-2">
              <button onClick={toggleMute} className="text-white">
                {isMuted ? (
                  <HiVolumeOff className="cursor-pointer" size={24} />
                ) : (
                  <HiVolumeUp className="cursor-pointer" size={24} />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="cursor-grab accent-(--tertiary-color) active:cursor-grabbing"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto mt-8 flex justify-center max-sm:grid max-sm:grid-cols-2 max-sm:gap-4">
        <div className="flex bg-(--tertiary-color) max-sm:order-first max-sm:col-span-2">
          <div
            className={`group relative hover:[clip-path:polygon(50px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_50px)] ${activeImage === "/assets/content-img/track_thumb.jpg" ? "[clip-path:polygon(50px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_50px)]" : ""} ${activeImage === "/assets/content-img/track_thumb.jpg" ? "max-sm:block" : "max-sm:hidden"} max-sm:m-auto`}
          >
            <img
              src="/assets/content-img/track_thumb.jpg"
              alt=""
              className="cursor-pointer max-sm:w-screen"
            />
            <div
              className={`absolute inset-0 hidden items-center justify-center group-hover:flex ${activeImage === "/assets/content-img/track_thumb.jpg" ? "flex!" : ""}`}
            >
              <div
                className="cursor-pointer rounded-full border-4 border-(--tertiary-color) p-3"
                onClick={() =>
                  handleTrackChange(
                    "/assets/content-img/track_thumb.jpg",
                    "/assets/media/euphoria.mp3",
                    0,
                    "Euphoria",
                  )
                }
              >
                <FaPlay
                  size={30}
                  className="cursor-pointer rounded-full text-(--tertiary-color)"
                />
              </div>
            </div>
            <h3
              className={`absolute right-0 bottom-0.5 left-0 hidden bg-black text-center text-lg font-semibold text-white uppercase group-hover:block ${activeImage === "/assets/content-img/track_thumb.jpg" ? "block!" : ""}`}
            >
              {tracks[0].text.substring(0, 10)}...
            </h3>
          </div>
          <div
            className={`group relative hover:[clip-path:polygon(50px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_50px)] ${activeImage === "/assets/content-img/track1.jpg" ? "[clip-path:polygon(50px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_50px)]" : ""} ${activeImage === "/assets/content-img/track1.jpg" ? "max-sm:block" : "max-sm:hidden"} max-sm:m-auto`}
          >
            <img
              src="/assets/content-img/track1.jpg"
              alt=""
              className="cursor-pointer max-sm:w-screen"
            />
            <div
              className={`absolute inset-0 hidden items-center justify-center group-hover:flex ${activeImage === "/assets/content-img/track1.jpg" ? "flex!" : ""}`}
            >
              <div
                className="cursor-pointer rounded-full border-4 border-(--tertiary-color) p-3"
                onClick={() =>
                  handleTrackChange(
                    "/assets/content-img/track1.jpg",
                    "/assets/media/black-box-funky.mp3",
                    1,
                    "You belong with me",
                  )
                }
              >
                <FaPlay
                  size={30}
                  className="rounded-full text-(--tertiary-color)"
                />
              </div>
            </div>
            <h3
              className={`absolute right-0 bottom-0.5 left-0 hidden bg-black text-center text-lg font-semibold text-white uppercase group-hover:block ${activeImage === "/assets/content-img/track1.jpg" ? "block!" : ""}`}
            >
              {tracks[1].text.substring(0, 10)}...
            </h3>
          </div>
          <div
            className={`group relative hover:[clip-path:polygon(50px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_50px)] ${activeImage === "/assets/content-img/track2.jpg" ? "[clip-path:polygon(50px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_50px)]" : ""} ${activeImage === "/assets/content-img/track2.jpg" ? "max-sm:block" : "max-sm:hidden"} max-sm:m-auto`}
          >
            <img
              src="/assets/content-img/track2.jpg"
              alt=""
              className="cursor-pointer max-sm:w-screen"
            />
            <div
              className={`absolute inset-0 hidden items-center justify-center group-hover:flex ${activeImage === "/assets/content-img/track2.jpg" ? "flex!" : ""}`}
            >
              <div
                className="cursor-pointer rounded-full border-4 border-(--tertiary-color) p-3"
                onClick={() =>
                  handleTrackChange(
                    "/assets/content-img/track2.jpg",
                    "/assets/media/fashion-red-tape.mp3",
                    2,
                    "Fashion red tape",
                  )
                }
              >
                <FaPlay
                  size={30}
                  className="rounded-full text-(--tertiary-color)"
                />
              </div>
            </div>
            <h3
              className={`absolute right-0 bottom-0.5 left-0 hidden bg-black text-center text-lg font-semibold text-white uppercase group-hover:block ${activeImage === "/assets/content-img/track2.jpg" ? "block!" : ""}`}
            >
              {tracks[2].text.substring(0, 10)}...
            </h3>
          </div>
          <div
            className={`group relative hover:[clip-path:polygon(50px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_50px)] ${activeImage === "/assets/content-img/track4.jpg" ? "[clip-path:polygon(50px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_50px)]" : ""} ${activeImage === "/assets/content-img/track4.jpg" ? "max-sm:block" : "max-sm:hidden"} max-sm:m-auto`}
          >
            <img
              src="/assets/content-img/track4.jpg"
              alt=""
              className="cursor-pointer max-sm:w-screen"
            />
            <div
              className={`absolute inset-0 hidden items-center justify-center group-hover:flex ${activeImage === "/assets/content-img/track4.jpg" ? "flex!" : ""}`}
            >
              <div
                className="cursor-pointer rounded-full border-4 border-(--tertiary-color) p-3"
                onClick={() =>
                  handleTrackChange(
                    "/assets/content-img/track4.jpg",
                    "/assets/media/euphoria.mp3",
                    3,
                    "Euphoria",
                  )
                }
              >
                <FaPlay
                  size={30}
                  className="rounded-full text-(--tertiary-color)"
                />
              </div>
            </div>
            <h3
              className={`absolute right-0 bottom-0.5 left-0 hidden bg-black text-center text-lg font-semibold text-white uppercase group-hover:block ${activeImage === "/assets/content-img/track4.jpg" ? "block!" : ""}`}
            >
              {tracks[3].text.substring(0, 10)}...
            </h3>
          </div>
          <div
            className={`group relative hover:[clip-path:polygon(50px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_50px)] ${activeImage === "/assets/content-img/track5.jpg" ? "[clip-path:polygon(50px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_50px)]" : ""} ${activeImage === "/assets/content-img/track5.jpg" ? "max-sm:block" : "max-sm:hidden"} max-sm:m-auto`}
          >
            <img
              src="/assets/content-img/track5.jpg"
              alt=""
              className="cursor-pointer max-sm:w-screen"
            />
            <div
              className={`absolute inset-0 hidden items-center justify-center group-hover:flex ${activeImage === "/assets/content-img/track5.jpg" ? "flex!" : ""}`}
            >
              <div
                className="cursor-pointer rounded-full border-4 border-(--tertiary-color) p-3"
                onClick={() =>
                  handleTrackChange(
                    "/assets/content-img/track5.jpg",
                    "/assets/media/black-box-funky.mp3",
                    4,
                    "You belong with me",
                  )
                }
              >
                <FaPlay
                  size={30}
                  className="rounded-full text-(--tertiary-color)"
                />
              </div>
            </div>
            <h3
              className={`absolute right-0 bottom-0.5 left-0 hidden bg-black text-center text-lg font-semibold text-white uppercase group-hover:block ${activeImage === "/assets/content-img/track5.jpg" ? "block!" : ""}`}
            >
              {tracks[4].text.substring(0, 10)}...
            </h3>
          </div>
        </div>

        <button
          onClick={handlePrevTrack}
          className="order-first m-4 h-14 w-14 cursor-pointer self-center border-2 border-white text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black max-sm:ml-auto"
        >
          <IoMdArrowDropleft size={40} className="m-auto" />
        </button>
        <button
          onClick={handleNextTrack}
          className="m-4 h-14 w-14 cursor-pointer self-center border-2 border-white p-1 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          <IoMdArrowDropright size={40} className="m-auto" />
        </button>
      </div>
    </div>
  );
}
