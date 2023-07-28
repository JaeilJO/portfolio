import Logo from '../Logo';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';

import Navigation from './Navigation';

function Header() {
    return (
        <header className=" fixed bg-neutral-50 dark:bg-neutral-900 w-full h-[5em] lg:text-3xl md:text-1xl flex justify-between items-center transition-all duration-200 z-50 px-[3em]">
            <Logo />
            <Navigation />
            <Hamburger />
            <MobileMenu />
        </header>
    );
}

export default Header;
