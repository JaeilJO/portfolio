import { NavigationItems } from '@/utils/NavigationItems';
import MobileMenuItem from './MobileMenuItem';
import { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRightSquareFill, BsLightbulbFill } from 'react-icons/bs';

function MobileMenu() {
    const [appear, setAppear] = useState(false);
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        if (!appear) {
            const timeout = setTimeout(() => {
                setShowButton(true);
            }, 600);

            return () => clearTimeout(timeout);
        }
    }, [appear]);

    return (
        <div
            className={`fixed right-[-60px]  top-[50%] translate-y-[-50%]  w-14 flex flex-col border-[1px] border-r-0 border-neutral-900 dark:border-neutral-50 sm:hidden ${
                appear ? `animate-open_mobile_menu` : `animate-close_mobile_menu`
            }`}
        >
            <button
                className="fixed -top-10 text-2xl left-[50%] translate-x-[-55%] hover:animate-mobile_close_button"
                onClick={() => {
                    setAppear(false);
                }}
            >
                <BsArrowRightSquareFill />
            </button>

            {showButton && (
                <button
                    className={`fixed -left-10 top-[40%] text-stone-500 dark:text-neutral-50  flex flex-col items-center animate-mobile_open_button ${
                        appear ? `hidden` : ``
                    }`}
                    onClick={() => {
                        setAppear(true);
                        setShowButton(false);
                    }}
                >
                    <div>
                        <BsArrowLeft />
                    </div>
                    <div>Menu</div>
                </button>
            )}
            <ul>
                {NavigationItems.map((item, index) => (
                    <MobileMenuItem
                        key={`mobile_menu_${item.key}`}
                        title={item.title}
                        href={`#${item.href}`}
                        icon={item.icon}
                        hasBorder={index < NavigationItems.length - 1}
                    />
                ))}
            </ul>
            <div className="fixed w-2 h-2 bg-neutral-50 border-neutral-900 dark:bg-neutral-900 dark:border-neutral-50 border-[2px] -top-[3px] -left-[3px] z-20" />
            <div className="fixed w-2 h-2 bg-neutral-50 border-neutral-900 dark:bg-neutral-900 dark:border-neutral-50 border-[2px] -bottom-[3px] -left-[3px] z-20" />
        </div>
    );
}

export default MobileMenu;
