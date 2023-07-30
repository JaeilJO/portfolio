import Skills from "@/utils/Skills";
import { useEffect, useRef, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import SkillItem from "./SkillItem/SkillItem";

function SkillSection() {
  const [currentSkill, setCurrentSkill] = useState(0);

  return (
    <div className="flex w-screen h-screen max-sm:flex-col">
      <div className="flex items-center justify-center w-full h-full text-9xl max-md:text-7xl">
        Skill
      </div>
      <div className="flex items-center justify-center w-full h-full ">
        <div className="relative text-2xl lg:text-5xl md:text-4xl w-[10em] h-[10em] overflow-hidden ">
          <ul className="absolute flex h-full ">
            {Skills.map((skill) => (
              <SkillItem
                key={skill.key}
                title={skill.title}
                icon={skill.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
