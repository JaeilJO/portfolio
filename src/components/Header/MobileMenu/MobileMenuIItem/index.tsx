import { NavigationItemType } from '@/utils/NavigationItems';
import { useNavigation } from '@/zustand/navigationStore';

function MobileMenuItem({ title, icon, href }: Pick<NavigationItemType, 'title' | 'href' | 'icon'>) {
    const [click] = useNavigation((state) => [state.click]);
    const onClick = () => {
        click();
    };
    return (
        <li className={'text-2xl m-4'}>
            <a href={`#${href}`} className={'flex items-center gap-3'} onClick={onClick}>
                <div>{title}</div>
                <div>{icon}</div>
            </a>
        </li>
    );
}

export default MobileMenuItem;
