import { SectionType } from '@/utils/Sections';
import { LegacyRef, MutableRefObject, useEffect, useRef } from 'react';

function Section({ id, content }: Pick<SectionType, 'id' | 'content'>) {
    const wrapRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (wrapRef.current) {
            wrapRef.current.style.height = window.innerHeight + 'px';
        }
    }, []);
    return (
        <section ref={wrapRef} className="w-screen " id={id}>
            {content}
        </section>
    );
}

export default Section;
