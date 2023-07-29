import Skills from "@/utils/Skills";
import { useEffect, useRef, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

function SkillSection() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.6,
  });

  const leftButton = () => {
    setCurrentSkill(currentSkill - 1);
  };

  const rightButton = () => {
    setCurrentSkill(currentSkill + 1);
  };

  return (
    <div className="relative flex w-screen h-full max-sm:flex-col" ref={ref}>
      <div className="flex items-center justify-center w-full h-full bg-blue-500 text-9xl max-md:text-7xl">
        <div>Skill</div>
      </div>
      <div className="relative flex items-center justify-center w-full h-full ">
        <div className="z-20 flex w-full h-full bg-red-500">
          <div className="absolute bg-yellow-200">Hello</div>
          <button className="w-full h-full bg-blue-800" onClick={leftButton} />
          <button
            className="w-full h-full bg-green-800"
            onClick={rightButton}
          />
        </div>
        <div className="absolute w-[80%] rounded-md  pt-[80%]">
          <div className="absolute w-[90%] pt-[90%] bg-neutral-50 border-4 border-neutral-900 dark:border-neutral-50 dark:bg-neutral-900 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-md z-10" />
          <div
            className={`absolute w-[90%] pt-[90%] bg-blue-200 top-2/4 left-2/4 -translate-x-[55%] -translate-y-[45%] rounded-md ${
              inView ? `animate-section_skill_down_box` : ``
            } `}
          />
          <div
            className={`absolute w-[90%] pt-[90%] bg-blue-300 top-2/4 left-2/4 -translate-x-[45%] -translate-y-[55%] rounded-md ${
              inView ? `animate-section_skill_top_box` : ``
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
