import Title from '/public/title.svg';
import OnlyTitle from '/public/onlytitle.svg';
import { useInView } from 'react-intersection-observer';
function HomeSection() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.6,
    });
    return (
        <div className="relative justify-center w-screen h-screen p-20 lex " ref={ref}>
            <Title
                className={`absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 fill-neutral-50 stroke-neutral-900 stroke-[5px] dark:fill-neutral-50 dark:stroke-neutral-900 max-w-5xl `}
            />

            <div
                className={`absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[60%] h-[40%] border-4 border-neutral-900 dark:border-neutral-50 origin-top `}
            >
                <div className="absolute w-3 h-3 border-2 -top-1.5 -left-1.5 bg-neutral-50 border-neutral-900 dark:bg-neutral-900 dark:border-neutral-50" />
                <div className="absolute w-3 h-3 border-2 -bottom-1.5 -left-1.5 bg-neutral-50 border-neutral-900 dark:bg-neutral-900 dark:border-neutral-50" />
                <div className="absolute w-3 h-3 border-2 -top-1.5 -right-1.5 bg-neutral-50 border-neutral-900 dark:bg-neutral-900 dark:border-neutral-50" />
                <div className="absolute w-3 h-3 border-2 -bottom-1.5 -right-1.5 bg-neutral-50 border-neutral-900 dark:bg-neutral-900 dark:border-neutral-50" />
            </div>
        </div>
    );
}

export default HomeSection;
