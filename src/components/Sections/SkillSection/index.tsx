import Skills from "@/utils/Skills";
import { useState } from "react";

import SkillItem from "./SkillItem";

function SkillSection() {
  const [currentSkill, setCurrentSkill] = useState(0);

  return (
    <div className="flex w-screen h-screen max-sm:flex-col">
      <div className="flex items-center justify-center w-full h-full text-9xl max-md:text-7xl">
        Skill
      </div>
      <div className="relative flex items-center justify-center w-full h-full max-sm:items-start">
        <div className="absolute z-30 flex w-full h-full bg-red-600 ">
          <button className="w-full h-full bg-blue-300">HEllo</button>
          <button className="w-full h-full">HEllo</button>
        </div>
        <div className="relative text-2xl lg:text-5xl md:text-4xl w-[10em] h-[10em]  overflow-hidden ">
          <ul className="absolute flex h-full -left-[0em] duration-200">
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
