import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiRedux, SiStyledcomponents } from 'react-icons/si';
import { RiBearSmileFill } from 'react-icons/ri';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';

export type SkillType = {
    key: number;
    title: string;
    icon: JSX.Element;
    main_color: string;
    side_color: string;
};

const Skills: SkillType[] = [
    // { key: 0, title: 'React', icon: <BiLogoReact />, main_color: 'react' },
    // { key: 1, title: 'NextJs', icon: <TbBrandNextjs />, main_color: `nextjs` },
    // {
    //     key: 2,
    //     title: 'Styled Components',
    //     icon: <SiStyledcomponents />,
    //     color: `styled_components`,
    // },
    // {
    //     key: 3,
    //     title: 'TailwindCSS',
    //     icon: <BiLogoTailwindCss />,
    //     color: `tailwind`,
    // },
    // {
    //     key: 4,
    //     title: 'Zustand',
    //     icon: <RiBearSmileFill />,
    //     color: `zustand`,
    // },
    // {
    //     key: 5,
    //     title: 'Redux',
    //     icon: <SiRedux />,
    //     color: `redux`,
    // },
    // {
    //     key: 6,
    //     title: 'HTML',
    //     icon: <AiFillHtml5 />,
    //     color: `html`,
    // },
    // {
    //     key: 7,
    //     title: 'CSS',
    //     icon: <FaCss3Alt />,
    //     color: `css`,
    // },
    // {
    //     key: 8,
    //     title: 'JavaScript',
    //     icon: <BiLogoJavascript />,
    //     color: `javascript`,
    // },
];

export default Skills;
