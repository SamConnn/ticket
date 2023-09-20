"use client";

import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
}

const Popular = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl pb-4">Popular this week</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-16 md:gap-8 sm:gap-2">
        <CardEvent className="bg-[url('../../public/92123123.jpg')] bg-cover bg-center hover:opacity-70 shadow-lg ease-in-out transform hover:scale-105 transition duration-500" />
        <CardEvent className="bg-[url('../../public/92123123.jpg')] bg-cover bg-center hover:opacity-70 shadow-lg transform hover:scale-105 transition duration-500" />
        <CardEvent className="bg-[url('../../public/9124411.png')] bg-cover bg-center hover:opacity-70 shadow-lg transform hover:scale-105 transition duration-500" />
        <CardEvent className="bg-[url('../../public/9289231.jpg')] bg-cover bg-center hover:opacity-70 shadow-lg transform hover:scale-105 transition duration-500" />
      </div>
    </div>
  );
};

function CardEvent({ className, style }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
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
    </motion.div>
  );
}

export default Popular;
