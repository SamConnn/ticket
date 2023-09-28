"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import highlight_1 from "../../../../public/highlight_1.jpg";
import highlight_2 from "../../../../public/highlight_2.jpg";
import highlight_3 from "../../../../public/highlight_3.jpg";
import highlight_4 from "../../../../public/highlight_4.png";
import highlight_5 from "../../../../public/highlight_5.jpg";
import "./style.css";

const Section = () => {
  const Ref = useRef<HTMLElement>(null);
  const isInView = useInView(Ref, { once: true });
  const progressCircle = useRef<HTMLDivElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (
    _s: unknown,
    time: number,
    progress: number
  ): void => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(
        time / 1000
      ).toString()}s`;
    }
  };

  return (
    <motion.div
      ref={Ref as React.RefObject<HTMLDivElement>}
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className=" items-center text-center justify-center py-10"
    >
      <div className="w-full h-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}

          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="rounded-2xl overflow-hidden h-full w-full">
              <Image
                src={highlight_1}
                className="p-2"
                fill
                objectFit="cover"
                objectPosition="center"
                alt="nature-1"
                unoptimized
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={highlight_2}
              className="p-2"
              fill
              objectFit="cover"
              objectPosition="center"
              alt="nature-1"
              quality={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={highlight_3}
              className="object-cover object-center w-full h-full p-2"
              fill
              objectFit="cover"
              objectPosition="center"
              alt="nature-1"
              quality={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={highlight_4}
              className="object-cover object-center w-full h-full p-2"
              fill
              objectFit="cover"
              objectPosition="center"
              alt="nature-1"
              quality={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={highlight_5}
              className="object-cover object-center w-full h-full p-2"
              fill
              objectFit="cover"
              objectPosition="center"
              alt="nature-1"
              quality={100}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Section;
