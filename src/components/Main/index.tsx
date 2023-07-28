import Sections from '@/utils/Sections';
import Section from '../Section';
import Footer from '../Footer';

function Main() {
    return (
        <div className="absolute lg:text-3xl md:text-1xl  mt-[5em] w-screen  bg-neutral-50 dark:bg-neutral-900">
            {Sections.map((section) => (
                <Section key={section.key} id={section.id} content={section.content} />
            ))}
            <Footer />
        </div>
    );
}

export default Main;
