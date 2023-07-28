import Logo from '../Logo';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';

function Header() {
    return (
        <header className=" bg-neutral-50 dark:bg-neutral-900 fixed h-[5em] lg:text-3xl md:text-1xl w-full flex justify-between px-[3em]  items-center transition-all duration-200 max-sm:justify-center z-50 max-sm:flex max-sm:flex-col ">
            <Logo />
            <Navigation />
        </header>
    );
}

export default Header;
