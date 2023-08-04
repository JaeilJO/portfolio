import CommonLeftText from '@/components/CommonComponents/CommonLeftText';
import CommonRightContentWrapper from '@/components/CommonComponents/CommonRightContentWrapper';
import CommonSectionBackground from '@/components/CommonComponents/CommonSectionBackground';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiLogoTailwindCss } from 'react-icons/bi';

import { BsLink } from 'react-icons/bs';
import { RiBearSmileFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { useInView } from 'react-intersection-observer';

function ProjectSection() {
    const [clicked, setClicked] = useState(false);
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.6,
    });
    return (
        <CommonSectionBackground>
            <CommonLeftText title="Project" />
            <CommonRightContentWrapper>
                <div className="flex items-center justify-center w-full h-full max-sm:items-start">
                    <div className="relative w-[65%] h-[80%] max-sm:w-[60%] max-sm:h-[70%] rounded-lg flex flex-col items-center justify-center  bg-white overflow-hidden shadow-lg">
                        <Image alt="s" width={200} height={200} className="w-[90%] " src={'/handwrite.png'} />
                        <div className="absolute bottom-0 left-0 flex justify-between w-full p-5 text-neutral-900">
                            <div className="text-xl truncate lg:text-4xl whitespace-nowrap">My Porfolio Site</div>
                            <ul>
                                <li className="relative p-1 lg:text-3xl border-[1px] text-xl rounded-md z-20 bg-neutral-50 hover:bg-[#e2e2e2] duration-300">
                                    <Link href={'https://jaeilstudio.vercel.app/'} title="app link">
                                        <BsLink />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CommonRightContentWrapper>
        </CommonSectionBackground>
    );
}

export default ProjectSection;
