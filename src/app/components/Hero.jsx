"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [heroImage, setHeroImage] = useState("/assets/bg/header_bg_2.jpg");
  

  useEffect(() => {
    const images = [
      "/assets/bg/header_bg_1.jpg", 
      "/assets/bg/header_bg_2.jpg"
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setHeroImage(randomImage);

    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="">
    <div className="relative h-155 w-full">
      {/* Loading state med madbars.gif */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="absolute inset-0 flex items-center justify-center bg-black"
      >
        <Image
          src="/assets/loader/madbars.gif"
          alt="Loading"
          width={50}
          height={50}
          
        />
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="h-full w-full"
      >
        <Image
          src={heroImage}
          alt="Hero"
          width={1200}
          height={600}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Wrapper for logo + tekst, flex-col stiller dem vertikalt */}
      <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:items-center">
        
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: isLoading ? 0 : 1, rotateX: isLoading ? 90 : 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "backInOut" }}
          className="flex items-center justify-center"
          style={{ perspective: 800 }}
        >
          <Image
            src="/assets/icon/Logo.svg"
            alt="Logo"
            width={200}
            height={200}
            className="w-110 h-auto sm:w-150"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? -100 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center justify-center gap-2 sm:gap-4"
        >
          <h2 className="text-lg sm:text-2xl tracking-[0.7em] text-(--secondary-color) uppercase">
            Have a good time
          </h2>

          <Image
            src="/assets/bottom_line.png"
            alt="Decoration"
            width={300}
            height={50}
            className="h-auto w-auto"
          />
        </motion.div>
      </motion.div>
    </div>

    </section>
  );
};

export default Hero;
