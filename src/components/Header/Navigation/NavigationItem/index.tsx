import LogoDecorator from '@/components/DecoratorComponents/ColumnLineDecorator';
import { NavigationItemType } from '@/utils/NavigationItems';
import { useState } from 'react';

function NavigationItem({ href, title }: Pick<NavigationItemType, 'href' | 'title'>) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <li
            onMouseOver={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
            className={`relative before:absolute before:w-0 before:h-1 before:bg-neutral-900 before:dark:bg-neutral-50 before:-bottom-1 hover:before:w-full before:duration-200`}
        >
            <a href={`#${href}`} title={`go to ${title} Section`}>
                {title}
            </a>
        </li>
    );
}

export default NavigationItem;
