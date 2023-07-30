import Skills from "@/utils/Skills";
import { useState } from "react";

import SkillItem from "./SkillItem";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function SkillSection() {
  const [currentSkill, setCurrentSkill] = useState(1);
  const cloneLast = { ...Skills[0], key: 9 };
  const cloneFirst = { ...Skills[Skills.length - 1], key: 10 };
  const [hoveredMouse, setHoveredMouse] = useState(true);

  const [newArray, setNewArray] = useState([cloneFirst, ...Skills, cloneLast]);

  const [animation, setAnimation] = useState(``);
  const leftMove = [
    "-translate-x-[0em]",
    "-translate-x-[10em]",
    "-translate-x-[20em]",
    "-translate-x-[30em]",
    "-translate-x-[40em]",
    "-translate-x-[50em]",
    "-translate-x-[60em]",
    "-translate-x-[70em]",
    "-translate-x-[80em]",
  ];
  const leftClick = () => {
    if (currentSkill === 1) {
      setTimeout(() => {
        setCurrentSkill(9);
      }, 100);
    }
    setCurrentSkill(currentSkill - 1);
    setAnimation("animate-section_skill_animation");
    setTimeout(() => {
      setAnimation("");
    }, 300);
  };

  const rightClick = () => {
    if (currentSkill === Skills.length) {
      setTimeout(() => {
        setCurrentSkill(1);
      }, 100);
    }
    setCurrentSkill(currentSkill + 1);
    setAnimation("animate-section_skill_animation");
    setTimeout(() => {
      setAnimation("");
    }, 300);
  };

  return (
    <div className="flex w-screen h-screen max-sm:flex-col">
      <div className="flex items-center justify-center w-full h-full text-9xl max-md:text-7xl">
        Skill
      </div>
      <div className="relative flex items-center justify-center w-full h-full max-sm:items-start">
        <div className="absolute z-30 flex w-full h-full">
          <button
            className="relative flex items-center justify-center w-full h-full"
            onClick={leftClick}
          >
            <div
              className={`relative max-sm:-top-5 w-full  text-5xl flex justify-center items-center  animate-bounce duration-200 ${
                hoveredMouse ? `opacity-50` : `opacity-0`
              }`}
              onMouseOver={() => setHoveredMouse(false)}
            >
              <div>
                <BsChevronLeft />
              </div>
            </div>
          </button>
          <button className="relative w-full h-full" onClick={rightClick}>
            <div
              className={`w-full relative max-sm:-top-5  text-5xl flex justify-center items-center  animate-bounce duration-200 ${
                hoveredMouse ? `opacity-50` : `opacity-0`
              }`}
              onMouseOver={() => setHoveredMouse(false)}
            >
              <div>
                <BsChevronRight />
              </div>
            </div>
          </button>
        </div>
        <div className="relative text-2xl lg:text-5xl md:text-4xl w-[10em] h-[10em]  overflow-hidden ">
          <ul className={`absolute flex h-full  ${leftMove[currentSkill]}`}>
            {newArray.map((skill) => (
              <SkillItem
                key={skill.key}
                title={skill.title}
                icon={skill.icon}
                animation={animation}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
