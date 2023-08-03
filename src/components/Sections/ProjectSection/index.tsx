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
        <div className=" relative flex w-screen h-screen  max-sm:flex-col max-sm:py-[50px]" ref={ref}>
            <div className="flex items-center justify-center  grow-[1] w-full  max-sm:items-end text-9xl max-md:text-7xl ">
                <div className="relative bottom-10">Project</div>
            </div>

            <div className="relative flex items-center justify-center grow-[1] w-full  max-sm:items-start">
                <div
                    className={` relative max-sm:w-[200px] max-sm:h-[250px] w-[60%] max-w-[400px] h-[40%] max-h-[600px]  ${
                        inView ? `animate-section_project_opening_animation` : ``
                    }  origin-bottom  rounded-md shadow-xl cursor-pointer  text-neutral-900 top-0  bg-neutral-50    duration-200 overflow-hidden `}
                    onClick={() => {
                        setClicked(!clicked);
                    }}
                >
                    <Image
                        alt="s"
                        width={200}
                        height={200}
                        className="absolute  top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%] w-[40%] min-w-[100px]  max-w-[300px]  max-sm:w-[100px]  "
                        src={'/handwrite.png'}
                    />
                    <div className="absolute text-xl lg:text-4xl bottom-5 left-5 ">My Porfolio Site</div>
                    <div className="absolute bottom-5 right-5">
                        <ul>
                            <li className="relative p-1 lg:text-3xl border-[1px] text-xl rounded-md z-20 bg-neutral-50 hover:bg-[#e2e2e2] duration-300">
                                <Link href={'https://jaeilstudio.vercel.app/'}>
                                    <BsLink />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="absolute top-5 right-5">
                        <ul
                            className={`relative flex flex-col items-end gap-3 max-sm:text-lg ${
                                clicked ? `animate-section_project_click` : `animate-section_project_non_click`
                            }  `}
                        >
                            <li className="flex items-center gap-2 ">
                                <div className="text-[.8em]">Next JS</div>
                                <div>
                                    <TbBrandNextjs />
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="text-[.8em]">Zustand</div>
                                <div>
                                    <RiBearSmileFill />
                                </div>
                            </li>
                            <li className="flex items-center gap-2 ">
                                <div className="text-[.8em]">TailwindCSS</div>
                                <div>
                                    <BiLogoTailwindCss />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
