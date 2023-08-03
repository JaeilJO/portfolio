import Link from 'next/link';
import Navigation from '../Header/Navigation';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="relative -bottom-5 my-20  h-[200px] border-t-2 flex justify-between items-center border-stone-500 font-thin mx-4 px-5  max-sm:flex-col max-sm:items-start max-sm:px-0 max-sm:justify-center max-sm:gap-5">
            <div>
                <div className="text-[16px]">Cantact Email</div>
                <div className="text-[20px] font-medium">whwodlf97@gmail.com</div>
            </div>
            <div>
                <Logo />
            </div>
        </footer>
    );
}

export default Footer;
