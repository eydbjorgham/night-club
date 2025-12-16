"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PiCallBellBold } from "react-icons/pi";
import { PiCheersBold } from "react-icons/pi";

const Welcome = () => {
  return (
    <div className="mt-(--section-padding) flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
      <div className="group relative">
        <Image
          src="/assets/content-img/thumb1.jpg"
          alt="Illustration"
          width={300}
          height={300}
          className="w-110 sm:h-full sm:w-90"
        />
        <div className="absolute inset-0 bg-(--tertiary-color) opacity-0 group-hover:opacity-100"></div>

        {/*Border*/}
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 0)",
          }}
          whileInView={{
            clipPath:
              "polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)",
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 left-0 hidden h-full w-full flex-col justify-evenly border-t border-b border-(--tertiary-color) bg-black text-white group-hover:flex"
        >
          {/*Icon*/}
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            <Image
              src="/assets/icon/favicon.png"
              alt="Illustration"
              width={65}
              height={65}
              className="m-auto rounded-md border border-(--tertiary-color) p-2"
            />
          </motion.div>

          {/*H1*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-center font-semibold uppercase">night club</h1>
          </motion.div>

          {/*P-tekst*/}
          <motion.p
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 mr-4 mb-8 ml-4 text-center"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </motion.p>
        </motion.div>
      </div>
      <div className="group relative">
        <Image
          src="/assets/content-img/reastaurant_1.jpg"
          alt="Illustration"
          width={300}
          height={300}
          className="w-110 sm:h-full sm:w-90"
        />

        <div className="absolute inset-0 bg-(--tertiary-color) opacity-0 group-hover:opacity-100"></div>

        {/*Border*/}
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 0)",
          }}
          whileInView={{
            clipPath:
              "polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)",
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 left-0 hidden h-full w-full flex-col justify-evenly border-t border-b border-(--tertiary-color) bg-black text-white group-hover:flex"
        >
          {/*Icon*/}
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            <PiCallBellBold
              size={65}
              className="m-auto rounded-md border border-(--tertiary-color) p-2 text-(--tertiary-color)"
            />
          </motion.div>

          {/*H1*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-center font-semibold uppercase">restaurant</h1>
          </motion.div>

          {/*P-tekst*/}
          <motion.p
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 mr-4 mb-8 ml-4 text-center"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </motion.p>
        </motion.div>
      </div>
      <div className="group relative">
        <Image
          src="/assets/content-img/thumb2.jpg"
          alt="Illustration"
          width={300}
          height={300}
          className="w-110 sm:h-full sm:w-90"
        />
        <div className="absolute inset-0 bg-(--tertiary-color) opacity-0 group-hover:opacity-100"></div>

        {/*Border*/}
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 0)",
          }}
          whileInView={{
            clipPath:
              "polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)",
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 left-0 hidden h-full w-full flex-col justify-evenly border-t border-b border-(--tertiary-color) bg-black text-white group-hover:flex"
        >
          {/*Icon*/}
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            <PiCheersBold
              size={65}
              className="m-auto rounded-md border border-(--tertiary-color) p-2 text-(--tertiary-color)"
            />
          </motion.div>

          {/*H1*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-center font-semibold uppercase">bar</h1>
          </motion.div>

          {/*P-tekst*/}
          <motion.p
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 mr-4 mb-8 ml-4 text-center"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
