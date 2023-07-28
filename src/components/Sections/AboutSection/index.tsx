import { useInView } from 'react-intersection-observer';
function AboutSection() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.6,
    });

    return (
        <div className="relative w-screen h-screen" ref={ref}>
            <div className="relative top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center gap-10 items-center">
                {/* subTitle */}
                <div className="duration-200 lg:text-5xl md:text-3xl">about</div>

                {/* title */}
                <div className="relative text-4xl duration-200 lg:text-9xl md:text-7xl">
                    <>Jaeil JO</>
                </div>

                {/* deco */}
                <div
                    className={`relative lg:w-[10%] border-[1px] md:border-[1px] lg:border-[2px] border-dashed border-neutral-900 dark:border-neutral-50 ${
                        inView ? `animate-section_about_title_animation` : ``
                    }`}
                >
                    <div className="absolute lg:w-[10px] lg:h-[10px] sm:w-[5px] sm:h-[5px] border-2 sm:border-1 border-neutral-900 dark:border-neutral-50 lg:-top-[0.15em] lg:-left-2 md:-top-0.5 md:-left-2 -left-1 -top-[2px] bg-neutral-50 dark:bg-neutral-900" />
                    <div className="absolute lg:w-[10px] lg:h-[10px] sm:w-[5px] sm:h-[5px] border-2 sm:border-1 border-neutral-900 dark:border-neutral-50 lg:-bottom-[0.15em] lg:-right-2 md:-bottom-0.5 md:-right-2 -right-1 -bottom-[2px] bg-neutral-50 dark:bg-neutral-900" />
                </div>

                {/* introduction */}
                <div className="lg:text-4xl md:text-3xl max-sm:text-2xl font-thin w-[80%] text-center ">
                    I am a front-end developer who strives to efficiently implement diverse designs and constantly stays
                    up-to-date with the latest technologies. My passion lies in learning and applying cutting-edge
                    approaches to create visually appealing and highly functional user interfaces. I am dedicated to
                    optimizing user experiences and ensuring seamless interactions through my expertise in front-end
                    development and continuous exploration of innovative design methodologies.
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
