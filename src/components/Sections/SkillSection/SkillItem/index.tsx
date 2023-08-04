import { SkillType } from '@/utils/Skills';
import { useRef, useState } from 'react';

function SkillItem({
    icon,
    title,
    animation,
    current_skill,
    primary_number,
}: Pick<SkillType, 'icon' | 'title'> & {
    animation: string;
    primary_number: number;
    current_skill: number;
}) {
    const main_color = useRef<string | null>(null);
    const side_color = useRef<string | null>(null);
    const dark_light = useRef<string | null>(null);
    const border_color = useRef<string | null>(null);

    switch (title) {
        case 'React':
            main_color.current = 'bg-[#48CEF6]';
            side_color.current = 'bg-[#18B6E7]';
            dark_light.current = 'dark:shadow-[#48CEF6]';
            border_color.current = 'border-[#18B6E7]';
            break;
        case 'NextJs':
            main_color.current = 'bg-[#313131]';
            side_color.current = 'bg-[#2c2c2c]';
            dark_light.current = 'dark:shadow-[#313131]';
            border_color.current = 'border-[#2c2c2c]';
            break;
        case 'Styled Components':
            main_color.current = 'bg-[#D175BC]';
            side_color.current = 'bg-[#cf68b7]';
            dark_light.current = 'dark:shadow-[#D175BC]';
            border_color.current = 'border-[#cf68b7]';
            break;
        case 'TailwindCSS':
            main_color.current = 'bg-[#48A6AD]';
            side_color.current = 'bg-[#39a0a8]';
            dark_light.current = 'dark:shadow-[#48A6AD]';
            border_color.current = 'border-[#39a0a8]';
            break;
        case 'Zustand':
            main_color.current = 'bg-[#443E38]';
            side_color.current = 'bg-[#3d3834]';
            dark_light.current = 'dark:shadow-[#443E38]';
            border_color.current = 'border-[#3d3834]';
            break;
        case 'Redux':
            main_color.current = 'bg-[#774ABC]';
            side_color.current = 'bg-[#6e40b7]';
            dark_light.current = 'dark:shadow-[#774ABC]';
            border_color.current = 'border-[#6e40b7]';
            break;
        case 'HTML':
            main_color.current = 'bg-[#F26624]';
            side_color.current = 'bg-[#E54C20]';
            border_color.current = 'border-[#E54C20]';
            dark_light.current = 'dark:shadow-[#F26624]';
            break;
        case 'CSS':
            main_color.current = 'bg-[#32A5D5]';
            side_color.current = 'bg-[#126EB0]';
            dark_light.current = 'dark:shadow-[#32A5D5]';
            border_color.current = 'border-[#126EB0]';
            break;
        case 'JavaScript':
            main_color.current = 'bg-[#F4991F]';
            side_color.current = 'bg-[#F07E23]';
            dark_light.current = 'dark:shadow-[#F4991F]';
            border_color.current = 'border-[#F07E23]';
            break;
        default:
            main_color.current = 'bg-[#262626]';
            side_color.current = 'bg-[#262626]';
            dark_light.current = 'dark:shadow-[#262626]';
            border_color.current = 'border-[#262626]';
            break;
    }

    return (
        <div className="absolute flex items-center justify-center w-full h-full max-sm:items-start">
            <div className="relative w-[50%] z-10 h-[50%] max-sm:w-[50%] max-sm:h-[50%] flex justify-center items-center max-sm:items-start max-sm:pt-[20%]">
                <div
                    className={`${animation} ${
                        current_skill === primary_number ? `opacity-1` : `opacity-0`
                    } relative flex w-[200px] h-[100px] xl:w-[300px] lg:h-[100px] xl:h-[150px] skew-x-[25deg] -rotate-[30deg]    ${
                        main_color.current
                    } ${dark_light.current}`}
                >
                    <div
                        className={`absolute w-[40px] h-full rotate-0 skew-y-[-45deg] left-[-40px] top-[20px] border-[1px] ${border_color.current} ${side_color.current}`}
                    />
                    <div
                        className={`absolute w-full h-[40px]  rotate-0 skew-x-[-45deg] bottom-[-40px] left-[-20px] ${side_color.current} border-[1px] ${border_color.current} `}
                    />
                    <div
                        className={`flex ${
                            title === 'Styled Components' ? `flex-col gap-0` : ``
                        } items-center justify-center w-full gap-1 text-3xl  ${
                            title === 'Zustand' || title === 'NextJs' ? `text-neutral-50` : `text-neutral-900`
                        }`}
                    >
                        <span className={`${title === 'Styled Components' ? `text-4xl` : ``}`}>{icon}</span>
                        <span
                            className={` text-3xl max-sm:text-xl ${
                                title.length >= 14 ? 'xl:text-2xl lg:text-lg text-lg max-sm:text-sm ' : ''
                            }`}
                        >
                            {title}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillItem;

// className={`absolute flex w-[60%]   text-neutral-50 ${
//   inView && !clicked ? `animate-section_skill_animation` : ``
// }  ${dark_light.current}  ${
//   main_color.current
// } ${animation} justify-center items-center gap-2 h-[3.5em] text-left skew-x-[25deg] rotate-[-30deg] duration-200 shadow-[-40px_40px_10px_rgba(0,0,0,0.5)] `}

{
    /* <div
                    className={`absolute w-[40px] h-full rotate-0 skew-y-[-45deg] left-[-40px] top-[20px] ${side_color.current}`}
                />
                <div
                    className={`absolute w-full h-[40px]  rotate-0 skew-x-[-45deg] bottom-[-40px] left-[-20px] ${side_color.current}`}
                />
                <span>{icon}</span>
                <span className={`${title.length >= 11 ? 'lg:text-3xl md:text-xl text-sm ' : ''}`}>{title}</span> */
}
