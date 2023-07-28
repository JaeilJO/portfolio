import { NavigationItems } from '@/utils/NavigationItems';
import MobileMenuItem from './MobileMenuIItem';
import { useNavigation } from '@/zustand/navigationStore';
import ModeChangeButton from '../Navigation/ModeChangeButton';
import MobileButtonSet from './MobileButtonSet';

function MobileMenu() {
    const [is_clicked] = useNavigation((state) => [state.is_clicked]);
    return (
        <div
            className={`absolute top-[100%] left-0 w-full border-b-2 overflow-hidden bg-neutral-50 dark:bg-neutral-900 md:hidden ${
                is_clicked ? `animate-mobile_menu_bar_open` : `animate-mobile_menu_bar_close`
            }`}
        >
            <ul>
                {NavigationItems.map((item) => (
                    <MobileMenuItem key={item.key} title={item.title} icon={item.icon} href={item.href} />
                ))}
                <MobileButtonSet />
            </ul>
        </div>
    );
}

export default MobileMenu;
