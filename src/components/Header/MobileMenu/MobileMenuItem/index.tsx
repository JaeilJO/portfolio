import { NavigationItemType } from '@/utils/NavigationItems';
import { useState } from 'react';

function MobileMenuItem({
    title,
    icon,
    href,
    hasBorder,
}: Pick<NavigationItemType, 'title' | 'href' | 'icon'> & { hasBorder: boolean }) {
    const [isHover, setIsHover] = useState(false);
    return (
        <>
            <li className={`relative cursor-pointer h-14`}>
                <a
                    href={href}
                    className={`relative text-2xl  w-[100%] h-[100%] flex justify-center items-center dark:text-neutral-50 text-neutral-900 bg-neutral-50 dark:bg-neutral-900  hover:bg-stone-200  ${
                        hasBorder ? `border-dashed border-b-[1px] border-neutral-900 dark:border-neutral-50` : ``
                    }  transition-200 transition-all z-10`}
                    onMouseOver={() => {
                        setIsHover(true);
                    }}
                    onMouseLeave={() => {
                        setIsHover(false);
                    }}
                >
                    {icon}
                </a>
                <span
                    className={`absolute text-right top-4 text-m w-14 -left-0 z-0 select-none ${
                        isHover ? `animate-mobile_appear` : ``
                    } z-0`}
                >
                    {title}
                </span>
            </li>
        </>
    );
}

export default MobileMenuItem;
