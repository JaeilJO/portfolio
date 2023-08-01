import { SectionType } from '@/utils/Sections';

function Section({ id, content }: Pick<SectionType, 'id' | 'content'>) {
    return (
        <section className="w-screen h-screen " id={id}>
            {content}
        </section>
    );
}

export default Section;
