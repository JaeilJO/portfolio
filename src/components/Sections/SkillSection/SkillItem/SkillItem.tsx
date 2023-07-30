import { SkillType } from "@/utils/Skills";
import { useRef, useState } from "react";

function SkillItem({ icon, title }: Pick<SkillType, "icon" | "title">) {
  const main_color = useRef<string | null>(null);
  const side_color = useRef<string | null>(null);

  switch (title) {
    case "React":
      main_color.current = "bg-[#48CEF6]";
      side_color.current = "bg-[#18B6E7]";
      break;
    case "NextJs":
      main_color.current = "bg-[#313131]";
      side_color.current = "bg-[#2c2c2c]";
      break;
    case "Styled Components":
      main_color.current = "bg-[#D175BC]";
      side_color.current = "bg-[#cf68b7]";
      break;
    case "TailwindCSS":
      main_color.current = "bg-[#48A6AD]";
      side_color.current = "bg-[#39a0a8]";
      break;
    case "Zustand":
      main_color.current = "bg-[#443E38]";
      side_color.current = "bg-[#3d3834]";
      break;
    case "Redux":
      main_color.current = "bg-[#774ABC]";
      side_color.current = "bg-[#6e40b7]";
      break;
    case "HTML":
      main_color.current = "bg-[#F26624]";
      side_color.current = "bg-[#E54C20]";
      break;
    case "CSS":
      main_color.current = "bg-[#32A5D5]";
      side_color.current = "bg-[#126EB0]";
      break;
    case "JavaScript":
      main_color.current = "bg-[#F4991F]";
      side_color.current = "bg-[#F07E23]";
      break;
    default:
      main_color.current = "bg-[#262626]";
      side_color.current = "bg-[#262626]";
      break;
  }

  console.log(main_color.current, side_color.current);
  return (
    <li className=" w-[10em] h-[10em] flex items-center justify-center ">
      <div
        className={`relative flex w-[60%] text-neutral-50 ${main_color.current} justify-center items-center gap-2 h-[3.5em] text-left skew-x-[25deg] rotate-[-30deg] duration-200 shadow-[-20px_20px_30px_rgba(0,0,0,0.5)] animate-section_skill_animation`}
      >
        <div
          className={`absolute w-[40px] h-full rotate-0 skew-y-[-45deg] left-[-40px] top-[20px] ${side_color.current}`}
        />
        <div
          className={`absolute w-full h-[40px]  rotate-0 skew-x-[-45deg] bottom-[-40px] left-[-20px] ${side_color.current}`}
        />
        <span>{icon}</span>
        <span
          className={`${
            title.length >= 11 ? "lg:text-3xl md:text-xl text-sm " : ""
          }`}
        >
          {title}
        </span>
      </div>
    </li>
  );
}

export default SkillItem;
