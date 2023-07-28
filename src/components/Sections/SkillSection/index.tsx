import Skills from '@/utils/Skills';
import { useEffect, useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

function SkillSection() {
    const [currentSkill, setCurrentSkill] = useState(0);
    const [mainBackgrounAnimation, setMainBackgroundAnimation] = useState(``);
    const [subBackgroundAnimation, setSubBackgroundAnimation] = useState(``);

    const nextSkill = () => {
        setCurrentSkill(currentSkill + 1);
        setMainBackgroundAnimation(`animate-section_skill_background_main`);
        setSubBackgroundAnimation(`animate-section_skill_background_sub`);
        setTimeout(() => {
            setMainBackgroundAnimation('');
            setSubBackgroundAnimation('');
        }, 300);
    };
    const PrevSkill = () => {
        setCurrentSkill(currentSkill - 1);
        setMainBackgroundAnimation(`animate-section_skill_background_main`);
        setSubBackgroundAnimation(`animate-section_skill_background_sub`);
        setTimeout(() => {
            setMainBackgroundAnimation('');
            setSubBackgroundAnimation('');
        }, 300);
    };

    interface Colors {
        [key: string]: string;
    }

    const translateValue = [
        'translate-x-[0em]',
        'translate-x-[-7em]',
        'translate-x-[-14em]',
        'translate-x-[-21em]',
        'translate-x-[-28em]',
        'translate-x-[-35em]',
        'translate-x-[-42em]',
        'translate-x-[-49em]',
        'translate-x-[-56em]',
        'translate-x-[-63em]',
    ];

    const setTranslateValue = translateValue[currentSkill];

    const colors: Colors = {
        react: 'text-[4em] text-[#5ED3F3]',
        nextjs: 'text-[4em] text-[#434343]',
        styled_components: 'text-[4em] text-[#BF7196]',
        tailwind: 'text-[4em] text-[#37BCF8]',
        zustand: 'text-[4em] text-[#433E38]',
        redux: 'text-[4em] text-[#7248B6]',
        html: 'text-[4em] text-[#DD4B25]',
        css: 'text-[4em] text-[#126EB0]',
        javascript: ' text-[4em] text-[#DE9D27]',
    };

    const mainBackgroundColors = [
        'bg-[#5ED3F3]',
        'bg-[#282828]',
        'bg-[#BF7196]',
        'bg-[#37BCF8]',
        'bg-[#433E38]',
        'bg-[#7248B6]',
        'bg-[#DD4B25]',
        'bg-[#126EB0]',
        'bg-[#DE9D27]',
    ];

    const setMainBackgroundColors = mainBackgroundColors[currentSkill];

    const subBackgroundColors = [
        'bg-[#c2f1fe]',
        'bg-[#8e8e8e]',
        'bg-[#e1aac4]',
        'bg-[#97deff]',
        'bg-[#9a8f82]',
        'bg-[#a081d1]',
        'bg-[#db8570]',
        'bg-[#629ac2]',
        'bg-[#dbb878]',
    ];

    const setSubBackgroundColors = subBackgroundColors[currentSkill];

    const arrowStatus = {
        unavailable: 'text-stone-200 pointer-events-none dark:text-stone-700',
        available: '',
    };

    const rightArrowStatus = currentSkill === Skills.length - 1 ? arrowStatus.unavailable : arrowStatus.available;
    const leftArrowStatus = currentSkill === 0 ? arrowStatus.unavailable : arrowStatus.available;

    return (
        <div className="relative flex w-[100vw] h-[100vh] text-4xl  max-sm:flex-col  lg:felx-row ">
            <div className="relative w-full h-full lg:text-6xl">
                <div className="absolute w-[7em] h-[7em] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] bg-neutral-50  dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-50 z-10 duration-200 ">
                    <div className="absolute w-[.3em] h-[.3em] bg-neutral-50  dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-50 -left-[0.15em] -top-[0.15em] duration-200 z-10" />
                    <div className="absolute w-[.3em] h-[.3em] bg-neutral-50  dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-50 -right-[0.15em] -top-[0.15em] duration-200 z-10" />
                    <div className="absolute w-[.3em] h-[.3em] bg-neutral-50  dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-50 -left-[0.15em] -bottom-[0.15em] duration-200 z-10" />
                    <div className="absolute w-[.3em] h-[.3em] bg-neutral-50  dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-50 -right-[0.15em] -bottom-[0.15em] duration-200 z-10" />
                    <div className="absolute z-0 w-full h-full overflow-hidden">
                        <div className={`absolute flex h-full text-4xl lg:text-6xl duration-200 ${setTranslateValue}`}>
                            {Skills.map((skill) => (
                                <div className={`w-[7em] h-full flex justify-center items-center`} key={skill.key}>
                                    <div className={colors[skill.color]}>{skill.icon}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className={`absolute w-[7em] h-[7em] ${setMainBackgroundColors} top-[50%] left-[50%] translate-x-[-40%] translate-y-[-60%] duration-200 ${mainBackgrounAnimation}`}
                />
                <div
                    className={`absolute w-[7em] h-[7em] ${setSubBackgroundColors}  z-0 top-[50%] left-[50%] translate-x-[-60%] translate-y-[-40%] duration-200 ${subBackgroundAnimation}`}
                />
            </div>

            <div className="flex flex-col items-center w-full h-full max-sm:h-[50%]">
                <div className="flex items-end h-full font-thin max-sm:items-start mb-3 mt-[-50px] max-sm:h-[10%] text-4xl max-sm:mb-10">
                    <div className="flex gap-4 ">
                        <button
                            className={`text-[60%] cursor-pointer hover:text-stone-200 z-10 duration-200 ${leftArrowStatus} dark:hover:text-stone-600`}
                            onClick={PrevSkill}
                        >
                            <BsFillCaretLeftFill />
                        </button>
                        <div>Skill</div>
                        <button
                            className={`text-[60%] cursor-pointer hover:text-stone-200 z-10 duration-200 ${rightArrowStatus} dark:hover:text-stone-600`}
                            onClick={nextSkill}
                        >
                            <BsFillCaretRightFill />
                        </button>
                    </div>
                </div>

                <div className="h-full duration-200 text-8xl max-md:text-5xl max-sm:text-4xl">
                    {Skills[currentSkill]?.title}
                </div>
            </div>
        </div>
    );
}

export default SkillSection;
