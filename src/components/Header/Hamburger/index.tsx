import { useCallback, useState } from 'react';
import HamburgerBar from './HamburgerBar';
import { useNavigation } from '@/zustand/navigationStore';

function Hamburger() {
    const [is_clicked, click] = useNavigation((state) => [state.is_clicked, state.click]);

    const onClick = useCallback(() => {
        click();
    }, [is_clicked]);

    return (
        <button className="relative z-40 w-8 h-4 md:hidden sm:hidden" onClick={onClick}>
            <HamburgerBar
                position="top-0"
                animation={is_clicked ? 'animate-hamburgerBar_clicked_top' : `animate-hamburgerBar_top_appear`}
            />
            <HamburgerBar
                position="top-[6.5px]"
                animation={is_clicked ? 'animate-hamburgerBar_clicked_middle' : 'animate-hamburgerBar_middle_appear'}
            />
            <HamburgerBar
                position="bottom-0"
                animation={is_clicked ? 'animate-hamburgerBar_clicked_bottom' : 'animate-hamburgerBar_bottom_appear'}
            />
        </button>
    );
}

export default Hamburger;
