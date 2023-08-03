import Skills from '@/utils/Skills';
import { useEffect, useState } from 'react';

import SkillItem from './SkillItem';
import Explanation from './Explanation';
import { useInView } from 'react-intersection-observer';
import { BsFillCursorFill } from 'react-icons/bs';

function SkillSection() {
    const [currentSkill, setCurrentSkill] = useState(1);
    const cloneLast = { ...Skills[0], key: 9 };
    const cloneFirst = { ...Skills[Skills.length - 1], key: 10 };
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });

    const [newArray, setNewArray] = useState([cloneFirst, ...Skills, cloneLast]);
    const [clicked, setClicked] = useState(false);
    const [animation, setAnimation] = useState(``);
    const leftMove = [
        '-translate-x-[0em]',
        '-translate-x-[10em]',
        '-translate-x-[20em]',
        '-translate-x-[30em]',
        '-translate-x-[40em]',
        '-translate-x-[50em]',
        '-translate-x-[60em]',
        '-translate-x-[70em]',
        '-translate-x-[80em]',
    ];

    const rightClick = () => {
        setClicked(true);
        if (currentSkill === Skills.length) {
            setTimeout(() => {
                setCurrentSkill(1);
            }, 100);
        }
        setCurrentSkill(currentSkill + 1);
        setAnimation('animate-section_skill_animation');
        setTimeout(() => {
            setAnimation('');
        }, 300);
    };

    return (
        <div className="flex w-screen h-screen max-sm:flex-col  max-sm:pb-[100px] " ref={ref}>
            <div className="relative flex items-center justify-center w-full h-full grow-[1]  max-sm:items-end text-9xl max-sm:text-7xl ">
                <div className="relative bottom-10">Skill</div>
            </div>

            <div className="relative flex justify-center w-full h-full  grow-[1] items-center   max-sm:items-start ">
                <div className="absolute flex w-full h-full ">
                    <button className="relative z-30 flex w-full h-full" onClick={rightClick}>
                        {clicked ? (
                            ``
                        ) : (
                            <>
                                <div className="absolute w-full bg-black h-2/4 dark:bg-white opacity-20 left-2/4 top-2/4 max-sm:h-[60%] max-sm:top-[5%]   max-sm:translate-y-0  -translate-y-2/4 -translate-x-2/4 " />
                                <span className="absolute max-sm:top-[30%] max-sm:translate-y-0  top-2/4 -translate-x-2/4 left-2/4 -translate-y-2/4 text-[1.6rem] dark:text-neutral-500 animate-section_skill_click_animation">
                                    <BsFillCursorFill />
                                </span>
                                <span className="absolute max-sm:translate-y-0  dark:text-neutral-500 top-2/4 -translate-x-2/4 left-2/4 translate-y-[50%] font-thin text-[1.3rem]">
                                    Click to See More
                                </span>
                            </>
                        )}
                    </button>
                </div>

                <div className="relative text-2xl   flex items-center max-sm:items-start lg:text-5xl md:text-4xl w-[10em]   min-h-[300px] h-full  overflow-hidden ">
                    <ul className={`absolute flex max-sm:top-[15%] ${leftMove[currentSkill]} `}>
                        {newArray.map((skill) => (
                            <SkillItem
                                key={skill.key}
                                title={skill.title}
                                icon={skill.icon}
                                animation={animation}
                                inView={inView}
                                clicked={clicked}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SkillSection;
