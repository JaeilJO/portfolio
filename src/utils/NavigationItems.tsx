import { ReactElement } from 'react';

import {
    BsEaselFill,
    BsFillHouseFill,
    BsFillPencilFill,
    BsFillPersonFill,
    BsFillTelephoneFill,
    BsGithub,
} from 'react-icons/bs';

export type NavigationItemType = {
    key: number;
    href: string;
    title: string;
    icon?: ReactElement<any, any>;
};

export type NavigationLinkIconType = {
    key: number;
    href: string;
    icon: ReactElement<any, any>;
};

export const NavigationItems: NavigationItemType[] = [
    { key: 0, href: 'home', title: 'Home', icon: <BsFillHouseFill /> },
    { key: 1, href: 'about', title: 'About', icon: <BsFillPersonFill /> },
    { key: 2, href: 'skill', title: 'Skill', icon: <BsFillPencilFill /> },
    { key: 3, href: 'project', title: 'Project', icon: <BsEaselFill /> },
    { key: 4, href: 'contact', title: 'Contact', icon: <BsFillTelephoneFill /> },
];

export const NavigationLinkIcons: NavigationLinkIconType[] = [
    { key: 0, href: 'https://github.com/JaeilJO', icon: <BsGithub /> },
];
