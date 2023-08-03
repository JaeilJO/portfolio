import Skills from '@/utils/Skills';
import { useEffect, useState } from 'react';

import SkillItem from './SkillItem';
import Explanation from './Explanation';
import { useInView } from 'react-intersection-observer';

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

    useEffect(() => {}, []);

    return (
        <div className="flex w-screen h-screen max-sm:flex-col max-sm:py-[100px]]" ref={ref}>
            <div className="relative flex items-center justify-center w-full grow-[1]  max-sm:items-end text-9xl max-sm:text-7xl  ">
                <div className="relative bottom-10">Skill</div>
            </div>

            <div className="relative flex justify-center w-full grow-[1] items-center  max-sm:items-start ">
                <div className="absolute z-30 flex w-full h-[50%]">
                    <button className="relative w-full h-full" onClick={rightClick} />
                </div>
                <div className="relative text-2xl lg:text-5xl md:text-4xl w-[10em]  min-h-[300px] h-[50%]   overflow-hidden ">
                    <ul
                        className={`absolute flex max-sm:top-[50%] top-[30%]  bottom-[50%]  ${leftMove[currentSkill]} `}
                    >
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
