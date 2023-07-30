import { useEffect, useRef, useState } from 'react';
import CodeWrite from '/public/codewrite.svg';
import HandWrite from '/public/handwrite.svg';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
function HomeSection() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.6,
    });

    return (
        <div className="flex flex-col justify-between w-screen min-h-screen " ref={ref}>
            <div className="relative flex flex-1 w-full overflow-hidden ">
                <div className="relative w-full top-5  scale-[50%] dark:fill-neutral-50 fill-neutral-900">
                    <HandWrite />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-start flex-1 gap-10 ">
                <div className="relative text-9xl max-sm:text-6xl max-md:text-7xl">A Front engineer</div>
                <div
                    className={`relative  w-[80%] h-[2px]  bg-neutral-900 ${
                        inView ? `animate-section_home_bar` : ``
                    } dark:bg-neutral-50`}
                />
                <div
                    className={`text-5xl font-thin opacity-0 max-sm:text-2xl ${
                        inView ? `animate-section_home_subtitle` : ``
                    }`}
                >
                    who transforms dreams into ideal designs
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
