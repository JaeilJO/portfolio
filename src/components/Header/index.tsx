import { useNavigation } from '@/zustand/navigationStore';
import Logo from '../Logo';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';

import Navigation from './Navigation';

function Header() {
    const bg_fill = `dark:bg-neutral-900 bg-neutral-50`;
    const [is_clicked] = useNavigation((state) => [state.is_clicked]);
    return (
        <header
            className={` z-[9999] fixed  w-full h-[100px] text-[1.6rem] backdrop-blur-sm   flex justify-between items-center  duration-200  px-[1.5em] ${
                is_clicked ? bg_fill : ``
            }`}
        >
            <Logo />
            <Navigation />
            <Hamburger />
            <MobileMenu />
        </header>
    );
}

export default Header;
