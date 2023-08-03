import { useNavigation } from '@/zustand/navigationStore';
import Logo from '../Logo';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';

import Navigation from './Navigation';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useAlert } from '@/zustand/contactAlertStore';

function Header() {
    const bg_fill = `dark:bg-neutral-900 bg-neutral-50`;
    const [is_clicked] = useNavigation((state) => [state.is_clicked]);
    const [alert_status] = useAlert((state) => [state.alert_status]);
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
            <div className="absolute top-0 left-0 w-full h-full ">
                <div
                    className={` ${
                        alert_status ? `animate-navigation_alert_bar` : ``
                    }  absolute left-[50%] flex justify-center items-center gap-2 -translate-x-[50%] opacity-0 rounded-md  font-light p-2 top-0 w-[90%] bg-green-700 text-neutral-50 translate-y-[0] text-[1rem] `}
                >
                    <BsFillCheckCircleFill />
                    <span>Success!</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
