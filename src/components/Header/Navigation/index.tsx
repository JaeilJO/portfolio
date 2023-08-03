import NavigationItem from './NavigationItem';
import ModeChangeButton from './ModeChangeButton';
import { NavigationItems, NavigationLinkIcons } from '@/utils/NavigationItems';
import NaivgationLinkIcon from './NavigationLinkIcon';

function Navigation() {
    return (
        <nav className="relative z-30 font-light  text-neutral-900 dark:text-neutral-50 max-sm:hidden">
            <ul className="flex items-center space-x-9 ">
                {NavigationItems.map((item) => (
                    <NavigationItem href={item.href} title={item.title} key={item.key} />
                ))}
                <ModeChangeButton />
                {NavigationLinkIcons.map((item) => (
                    <NaivgationLinkIcon key={`icon_${item.key}`} href={item.href} icon={item.icon} />
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
