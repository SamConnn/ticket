"use client";

import BigHomeLogo from "@/components/logo/big-home-logo";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Partner = () => {
  const Ref = useRef<HTMLElement>(null);
  const isInView = useInView(Ref, {once: true});

  return (
    <motion.div
      ref={Ref as React.RefObject<HTMLDivElement>}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="w-full pt-32 flex items-center justify-center"
    >
      <div className="w-full px-4 text-black flex flex-col">
        <div className="w-full text-7xl font-bold flex flex-col md:flex-row md:justify-between">
          <h1 className="w-full md:w-2/3 drop-shadow-2xl">
            Unlock the World of Events
          </h1>
          <div className="md:pt-2 w-full md:w-1/3 sm:w-1/2 pt-6">
            <BigHomeLogo />
          </div>
        </div>
        <div className="w-full text-2xl font-bold mt-8">
          <text>Tickets Made Simple</text>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-1/2 text-gray-500">
            To ensure that all Wikipedia content is verifiable, anyone may
            question an uncited claim.
            If your work has been tagged
          </p>
          <p></p>
        </div>
      </div>
    </motion.div>
  );
};

export default Partner;
