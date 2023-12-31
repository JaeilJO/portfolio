import Sections from '@/utils/Sections';
import Section from '../Section';
import Footer from '../Footer';
import { useNavigation } from '@/zustand/navigationStore';
import { useEffect } from 'react';

function Main() {
    const [is_clicked, click] = useNavigation((state) => [state.is_clicked, state.click]);

    return (
        <div
            className="absolute w-screen h-full bg-neutral-50 dark:bg-neutral-900"
            onClick={() => {
                if (is_clicked) {
                    click();
                }
            }}
        >
            {Sections.map((section) => (
                <Section key={section.key} id={section.id} content={section.content} />
            ))}
            <Footer />
        </div>
    );
}

export default Main;
