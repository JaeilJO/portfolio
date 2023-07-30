import { SkillType } from '@/utils/Skills';
import { useRef, useState } from 'react';

function SkillItem({ icon, title, animation }: Pick<SkillType, 'icon' | 'title'> & { animation: string }) {
    const main_color = useRef<string | null>(null);
    const side_color = useRef<string | null>(null);
    const dark_light = useRef<string | null>(null);

    switch (title) {
        case 'React':
            main_color.current = 'bg-[#48CEF6]';
            side_color.current = 'bg-[#18B6E7]';
            dark_light.current = 'dark:shadow-[#48CEF6]';
            break;
        case 'NextJs':
            main_color.current = 'bg-[#313131]';
            side_color.current = 'bg-[#2c2c2c]';
            dark_light.current = 'dark:shadow-[#313131]';
            break;
        case 'Styled Components':
            main_color.current = 'bg-[#D175BC]';
            side_color.current = 'bg-[#cf68b7]';
            dark_light.current = 'dark:shadow-[#D175BC]';
            break;
        case 'TailwindCSS':
            main_color.current = 'bg-[#48A6AD]';
            side_color.current = 'bg-[#39a0a8]';
            dark_light.current = 'dark:shadow-[#48A6AD]';
            break;
        case 'Zustand':
            main_color.current = 'bg-[#443E38]';
            side_color.current = 'bg-[#3d3834]';
            dark_light.current = 'dark:shadow-[#443E38]';
            break;
        case 'Redux':
            main_color.current = 'bg-[#774ABC]';
            side_color.current = 'bg-[#6e40b7]';
            dark_light.current = 'dark:shadow-[#774ABC]';
            break;
        case 'HTML':
            main_color.current = 'bg-[#F26624]';
            side_color.current = 'bg-[#E54C20]';
            dark_light.current = 'dark:shadow-[#F26624]';
            break;
        case 'CSS':
            main_color.current = 'bg-[#32A5D5]';
            side_color.current = 'bg-[#126EB0]';
            dark_light.current = 'dark:shadow-[#32A5D5]';
            break;
        case 'JavaScript':
            main_color.current = 'bg-[#F4991F]';
            side_color.current = 'bg-[#F07E23]';
            dark_light.current = 'dark:shadow-[#F4991F]';
            break;
        default:
            main_color.current = 'bg-[#262626]';
            side_color.current = 'bg-[#262626]';
            dark_light.current = 'dark:shadow-[#262626]';
            break;
    }

    return (
        <li className=" w-[10em] h-[10em] flex items-center justify-center ">
            <div
                className={`relative flex w-[60%] text-neutral-50 ${dark_light.current}  ${main_color.current} ${animation} justify-center items-center gap-2 h-[3.5em] text-left skew-x-[25deg] rotate-[-30deg] duration-200 shadow-[-40px_40px_10px_rgba(0,0,0,0.5)] `}
            >
                <div
                    className={`absolute w-[40px] h-full rotate-0 skew-y-[-45deg] left-[-40px] top-[20px] ${side_color.current}`}
                />
                <div
                    className={`absolute w-full h-[40px]  rotate-0 skew-x-[-45deg] bottom-[-40px] left-[-20px] ${side_color.current}`}
                />
                <span>{icon}</span>
                <span className={`${title.length >= 11 ? 'lg:text-3xl md:text-xl text-sm ' : ''}`}>{title}</span>
            </div>
        </li>
    );
}

export default SkillItem;
