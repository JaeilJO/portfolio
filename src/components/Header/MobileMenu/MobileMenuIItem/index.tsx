import { NavigationItemType } from '@/utils/NavigationItems';

function MobileMenuItem({ title, icon, href }: Pick<NavigationItemType, 'title' | 'href' | 'icon'>) {
    return (
        <li className={'text-2xl m-4'}>
            <a href={`#${href}`} className={'flex items-center gap-3'}>
                <div>{title}</div>
                <div>{icon}</div>
            </a>
        </li>
    );
}

export default MobileMenuItem;
