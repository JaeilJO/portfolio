import Skills from '@/utils/Skills';
import { useEffect, useRef, useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

function SkillSection() {
    const [currentSkill, setCurrentSkill] = useState(0);

    return (
        <div className="flex w-screen h-screen max-sm:flex-col">
            <div className="flex items-center justify-center w-full h-full text-9xl max-md:text-7xl">Skill</div>
            <div className="flex items-center justify-center w-full h-full ">
                <div className="relative text-2xl lg:text-5xl md:text-4xl w-[10em] h-[10em] overflow-hidden">
                    <ul className="absolute flex h-full ">
                        {Skills.map((skill) => (
                            <li className=" w-[10em] h-[10em] flex items-center justify-center ">
                                <div className="relative flex w-[60%] text-neutral-50 bg-blue-300 justify-center items-center gap-2 h-[3.5em] text-left skew-x-[25deg] rotate-[-30deg] duration-200 shadow-[-20px_20px_30px_rgba(0,0,0,0.5)] animate-section_skill_animation">
                                    <div className="absolute w-[40px] h-full rotate-0 skew-y-[-45deg] left-[-40px] top-[20px]  bg-[#b1b1b1]" />
                                    <div className="absolute w-full h-[40px] bg-[#b1b1b1] rotate-0 skew-x-[-45deg] bottom-[-40px] left-[-20px]" />
                                    <span>{skill.icon}</span>
                                    <span>{skill.title}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SkillSection;
