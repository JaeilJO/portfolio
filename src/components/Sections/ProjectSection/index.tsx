import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiLogoTailwindCss } from "react-icons/bi";

import { BsLink } from "react-icons/bs";
import { RiBearSmileFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

function ProjectSection() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="relative flex w-screen h-screen max-sm:flex-col">
      <div className="flex items-center justify-center w-full h-full max-sm:items-end text-9xl max-md:text-7xl">
        <div className="relative max-sm:bottom-10">Project</div>
      </div>

      <div className="flex items-center justify-center h-full ">
        <div
          className="relative w-[15em] h-[22em] rounded-md shadow-xl cursor-pointer bg-neutral-50 text-neutral-900  duration-200 overflow-hidden "
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <Image
            alt="s"
            width={200}
            height={200}
            className="absolute top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%] "
            src={"/handwrite.png"}
          />
          <div className="absolute text-xl lg:text-4xl bottom-5 left-5 ">
            My Porfolio Site
          </div>
          <div className="absolute bottom-5 right-5">
            <ul>
              <li className="relative p-1 lg:text-3xl border-[1px] text-xl rounded-md z-20 bg-neutral-50 hover:bg-[#e2e2e2] duration-300">
                <Link href={"https://portfolio-five-alpha-25.vercel.app/"}>
                  <BsLink />
                </Link>
              </li>
            </ul>
          </div>

          <div className="absolute top-5 right-5">
            <ul
              className={`relative flex flex-col items-end gap-3 max-sm:text-lg ${
                clicked
                  ? `animate-section_project_click`
                  : `animate-section_project_non_click`
              }  `}
            >
              <li className="flex items-center gap-2 ">
                <div className="text-[.8em]">Next JS</div>
                <div>
                  <TbBrandNextjs />
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="text-[.8em]">Zustand</div>
                <div>
                  <RiBearSmileFill />
                </div>
              </li>
              <li className="flex items-center gap-2 ">
                <div className="text-[.8em]">TailwindCSS</div>
                <div>
                  <BiLogoTailwindCss />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
