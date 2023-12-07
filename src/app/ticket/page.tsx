"use client";
import Calendar from "@/components/icon/calendar";
import Time from "@/components/icon/clock";
import Pin from "@/components/icon/pin";
import { motion } from "framer-motion";
import Image from "next/image";
import HeaderImage from "../../../public/album_5.webp";

const Ticket = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const truncate = (str: string) => {
    return str.length > 30 ? str.substring(0, 30) + "..." : str;
  };
  

  return (
    <div>
      <div className="w-full bg-image p-10 mt-2"></div>
      <div className="mt-24">
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row md:flex-row w-24 h-72 lg:w-64 lg:h-64 md:w-64 md:h-64"
          >
            <Image
              src={HeaderImage}
              alt={""}
              className="object-cover object-center ml-16 lg:ml-64 md:ml-32"
            />
            {/* I want to this text to be center horizontal */}
            <div className="flex flex-col border-lg ml-16 mt-4 lg:mt-0 md:mt-0 text-white gap-2">
              <motion.h3
                variants={child}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-sm font-bold opacity-50"
              >
                performance
              </motion.h3>
              <motion.h1
                variants={child}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl lg:text-4xl md:text-4xl font-bold whitespace-nowrap"
              >
                ROCK and THE RING
              </motion.h1>
              <div className="flex gap-4">
                <motion.div
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="pr-2"
                >
                  <Calendar />
                </motion.div>
                <motion.h3
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-sm lg:text-lg md:text-md font-bold whitespace-nowrap"
                >
                  Saturday 18 November 2023
                </motion.h3>
              </div>
              <div className="flex gap-4">
                <motion.div
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="pr-2"
                >
                  <Pin />
                </motion.div>
                <motion.h3
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-sm lg:text-lg md:text-md font-bold whitespace-nowrap"
                >
                  {truncate("Moonstar Studio (Studio 1) Ladprao Soi 80")}
                </motion.h3>
              </div>
              <div className="flex gap-4">
                <motion.div
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="pr-2"
                >
                  <Time />
                </motion.div>
                <motion.h3
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-sm lg:text-lg md:text-md font-bold whitespace-nowrap"
                >
                  2:00 p.m
                </motion.h3>
              </div>
            </div>
          </motion.div>
          <div></div>
        </div>
        <div className="bg-white h-screen">
          <div className="container mx-auto items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="flex-1">test</div>
              <div className="flex-1">test</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
