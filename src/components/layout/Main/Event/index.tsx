"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
}

const Event = () => {
  const Ref = useRef<HTMLElement>(null);
  const isInView = useInView(Ref, { once: true });
  const url = "https://picsum.photos/id/237/200/300";

  return (
    <motion.div
      ref={Ref as React.RefObject<HTMLDivElement>}
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="w-full">
        <h1 className="font-bold text-2xl pb-4 pt-16">Event for this week</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-16 md:gap-8 sm:gap-4">
          <CardEvent className="bg-[url('../../public/92123123.jpg')] bg-cover bg-center hover:opacity-70 shadow-lg ease-in-out transform hover:scale-105 transition duration-500" />
          <CardEvent className="bg-[url('../../public/92123123.jpg')] bg-cover bg-center hover:opacity-70 shadow-lg transform hover:scale-105 transition duration-500" />
          <CardEvent className="bg-[url('../../public/9124411.png')] bg-cover bg-center hover:opacity-70 shadow-lg transform hover:scale-105 transition duration-500" />
          <CardEvent
            className={`bg-cover bg-center hover:opacity-70 shadow-lg transform hover:scale-105 transition duration-500`}
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

function CardEvent({ className, style }: CardProps) {
  return (
    <Card className={cn(className, "h-64 ease-out")} style={style}>
      <CardHeader>
        <CardTitle className="text-black bg-white w-12 h-11 text-sm rounded-md shadow-lg">
          <p className="text-center font-extrabold">June</p>
          <p className="text-center">14</p>
        </CardTitle>
      </CardHeader>
      {/* <Image
          src="https://cdn.pixabay.com/photo/2023/03/16/16/49/watercolor-7857103_640.png"
          alt="Card Image"
          width={140}
          height={27}
        /> */}
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}

export default Event;
