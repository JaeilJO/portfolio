import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux, SiStyledcomponents } from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";

export type SkillType = {
  key: number;
  title: string;
  icon: JSX.Element;
};

const Skills: SkillType[] = [
  {
    key: 0,
    title: "React",
    icon: <BiLogoReact />,
  },
  { key: 1, title: "NextJs", icon: <TbBrandNextjs /> },
  {
    key: 2,
    title: "Styled Components",
    icon: <SiStyledcomponents />,
  },
  {
    key: 3,
    title: "TailwindCSS",
    icon: <BiLogoTailwindCss />,
  },
  {
    key: 4,
    title: "Zustand",
    icon: <RiBearSmileFill />,
  },
  {
    key: 5,
    title: "Redux",
    icon: <SiRedux />,
  },
  {
    key: 6,
    title: "HTML",
    icon: <AiFillHtml5 />,
  },
  {
    key: 7,
    title: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    key: 8,
    title: "JavaScript",
    icon: <BiLogoJavascript />,
  },
];

export default Skills;
