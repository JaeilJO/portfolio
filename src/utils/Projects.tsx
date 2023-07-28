import PortfolioSiteView from '@/components/Projects/PortfolioSiteView';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

type ProjectType = {
    key: number;
    title: string;
    skills: JSX.Element[];
    projectView: JSX.Element;
};

const Projects: ProjectType[] = [
    {
        key: 0,
        title: 'Portfolio Site',
        projectView: <PortfolioSiteView />,
        skills: [<TbBrandNextjs key={'nextjs'} />, <BiLogoTailwindCss key={'tailwindcss'} />],
    },
];

export default Projects;
