import { NavigationLinkIconType } from '@/utils/NavigationItems';
import Link from 'next/link';

function NaivgationLinkIcon({ icon, href }: Pick<NavigationLinkIconType, 'href' | 'icon'>) {
    return (
        <li className="text-[1.6rem] duration-200 hover:text-stone-500">
            <Link href={href}>{icon}</Link>
        </li>
    );
}

export default NaivgationLinkIcon;
