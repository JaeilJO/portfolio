import Skills from '@/utils/Skills';
import { useEffect, useState } from 'react';

import SkillItem from './SkillItem';

import { useInView } from 'react-intersection-observer';

import CommonLeftText from '@/components/CommonComponents/CommonLeftText';
import CommonSectionBackground from '@/components/CommonComponents/CommonSectionBackground';
import CommonRightContentWrapper from '@/components/CommonComponents/CommonRightContentWrapper';
import { BsFillCursorFill } from 'react-icons/bs';

function SkillSection() {
    const [currentSkill, setCurrentSkill] = useState(1);
    const cloneLast = { ...Skills[0], key: 9 };
    const cloneFirst = { ...Skills[Skills.length - 1], key: 10 };

    const [newArray, setNewArray] = useState([cloneFirst, ...Skills, cloneLast]);
    const [clicked, setClicked] = useState(false);
    const [animation, setAnimation] = useState(``);

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
        <div className="flex items-center w-screen h-screen bg-purple-300">
            <CommonSectionBackground>
                <CommonLeftText title="Skill" />

                <CommonRightContentWrapper>
                    <div className="relative w-full h-full ">
                        <button className="absolute z-20 w-full h-full" onClick={rightClick}>
                            {clicked ? (
                                <></>
                            ) : (
                                <div className="relative flex items-center justify-center w-full h-full ">
                                    <div className="absolute w-full h-full bg-black rounded-lg opacity-30" />
                                    <div className="relative text-[1.3rem] flex flex-col items-center text-neutral-50">
                                        <div className="">
                                            <BsFillCursorFill />
                                        </div>
                                        <div>Click to See More</div>
                                    </div>
                                </div>
                            )}
                        </button>

                        <div className="w-full h-full ">
                            <div className="relative w-full h-full ">
                                {newArray.map((skill) => (
                                    <SkillItem
                                        key={skill.key}
                                        title={skill.title}
                                        icon={skill.icon}
                                        animation={animation}
                                        current_skill={currentSkill}
                                        primary_number={skill.key + 1}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </CommonRightContentWrapper>
            </CommonSectionBackground>
        </div>
    );
}

export default SkillSection;
