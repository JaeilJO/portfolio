import AboutSection from '@/components/Sections/AboutSection';
import ContactSection from '@/components/Sections/ContactSection';
import HomeSection from '@/components/Sections/HomeSection';
import ProjectSection from '@/components/Sections/ProjectSection';
import SkillSection from '@/components/Sections/SkillSection';

export type SectionType = {
    key: number;
    id: string;
    content: JSX.Element;
};

const Sections: SectionType[] = [
    { key: 0, id: 'home', content: <HomeSection /> },
    { key: 1, id: 'about', content: <AboutSection /> },
    { key: 2, id: 'skill', content: <SkillSection /> },
    { key: 3, id: 'project', content: <ProjectSection /> },
    { key: 4, id: 'contact', content: <ContactSection /> },
];

export default Sections;
