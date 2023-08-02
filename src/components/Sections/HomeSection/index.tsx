import { useEffect, useRef, useState } from "react";

import HandWrite from "/public/handwrite.svg";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
function HomeSection() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.6,
  });

  return (
    <div className="flex flex-col justify-between w-screen h-screen " ref={ref}>
      <div className="relative flex flex-1 w-full overflow-hidden ">
        <div className="relative flex items-center justify-center w-full h-full dark:fill-neutral-50 fill-neutral-900">
          <div className="relative w-[50%] max-w-[500px]">
            <HandWrite />
          </div>
        </div>
      </div>

      <div className="relative flex-1 ">
        <div className="relative flex flex-col items-center gap-7 top-10">
          <div className="relative text-center text-9xl max-[300px]:text-3xl max-sm:text-5xl max-md:text-7xl">
            A Front engineer
          </div>
          <div
            className={`relative  w-[80%] h-[2px]  bg-neutral-900 ${
              inView ? `animate-section_home_bar` : ``
            } dark:bg-neutral-50`}
          />
          <div
            className={`text-5xl font-thin text-center opacity-0 max-sm:text-xl ${
              inView ? `animate-section_home_subtitle` : ``
            }`}
          >
            who transforms dreams into ideal designs
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
