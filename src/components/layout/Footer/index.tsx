"use client"

import { Facebook, Instagram, Twitter } from "@/components/logo/SocialMedia";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const Ref = useRef<HTMLElement>(null);
  const isInView = useInView(Ref, { once: true });
  return (
    <motion.div
      ref={Ref as React.RefObject<HTMLDivElement>}
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <footer className="relative pb-6 container mx-auto pt-12">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4 mb-6">
            <h4 className="text-3xl font-semibold text-gray-700">JOIN US</h4>
            <h5 className="text-md mt-0 mb-2 text-gray-500 pt-6">
              Join our growing community of event enthusiasts and let
              TicketKamboda be your ultimate ticketing companion. Your next
              unforgettable experience is just a tap away.
            </h5>
            <h5 className="text-md mt-0 mb-2 text-gray-500 pt-6">
              Follow us on social media for exclusive updates and special
              offers!
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex gap-4">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <Facebook />
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <Instagram />
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <Twitter />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 pt-8">
            <h5 className="text-md mt-0 mb-2 text-gray-500 pt-6">
              Don&apos;t miss out on the events that make life memorable!
              Checkout TicketKamboda now and embark on a hassle-free journey to
              discover and attend the events you love. Whether you&rsquo;re a
              seasoned event-goer or a first-time attendee. our intuitive web
              will ensure that every ticket purchasing experience is a
              delightful one.
            </h5>
          </div>
        </div>
        <Separator className="border-gray-800" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold pt-5">
              Copyright © Dinal
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
