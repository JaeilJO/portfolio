import Link from "next/link";
import React from "react";

import {
  BsAspectRatio,
  BsFillCaretDownFill,
  BsLink45Deg,
} from "react-icons/bs";

function ProjectSection() {
  return (
    <div className="relative flex w-full min-h-screen max-sm:flex-col">
      <div className="flex items-center justify-center flex-1 w-full text-9xl max-md:text-7xl">
        Project
      </div>
      <div className="flex flex-col flex-1 w-full px-10 py-5 ">
        <div className="">
          <div className="text-4xl max-sm:3xl">Projects</div>
          <hr className="w-[60%] my-3" />
          <ul>
            <li className="w-full items-center flex justify-between p-2 h-[3em] text-neutral-900 bg-blue-100 rounded-xl">
              <div>Portfolio Site</div>
              <div className="flex gap-3 text-2xl text-neutral-900">
                <Link
                  href={"#"}
                  className="p-2 duration-200 rounded-md hover:bg-stone-200 "
                >
                  <BsLink45Deg />
                </Link>
                <div className="p-2 duration-200 rounded-md cursor-pointer hover:bg-stone-200">
                  <BsFillCaretDownFill />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
