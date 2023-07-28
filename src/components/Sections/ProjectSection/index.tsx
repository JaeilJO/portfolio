import Projects from '@/utils/Projects';
import React from 'react';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function ProjectSection() {
    const [currentProject, setCurrentProject] = useState(0);
    const arrowStatus = {
        unavailable: 'text-stone-200 pointer-events-none dark:text-stone-700',
        available: '',
    };
    const rightArrowStatus = currentProject === Projects.length - 1 ? arrowStatus.unavailable : arrowStatus.available;
    const leftArrowStatus = currentProject === 0 ? arrowStatus.unavailable : arrowStatus.available;
    return (
        <div className=" w-[100vw] h-[100vh] flex lg:flex-row max-md:flex-col-reverse ">
            <div className="flex flex-col items-center justify-center w-full h-full text-5xl max-md:justify-start max-sm:text-4xl">
                <div>
                    <div className="mb-[1em] font-thin text-right max-md:text-center ">Project</div>
                    <div className="mb-[1em] lg:text-[1.4em] text-right  max-md:text-center ">
                        {Projects[currentProject].title}
                    </div>
                    <ul className="flex justify-end gap-5 max-md:justify-center max-md:text-[0.7em]">
                        {Projects[currentProject].skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex items-center justify-between w-full h-full gap-5 p-20 text-5xl max-md:p-0 ">
                <button className={`${leftArrowStatus}`}>
                    {currentProject === 0 ? <div className="w-3 h-10 rounded-md bg-stone-200" /> : <BsChevronLeft />}
                </button>
                <div className="max-w-[500px] w-full h-[50%] bg-neutral-50  rounded-md overflow-hidden shadow-lg">
                    {Projects.map((project) => (
                        <React.Fragment key={project.key}>{project.projectView}</React.Fragment>
                    ))}
                </div>
                <button className={`${rightArrowStatus}`}>
                    {currentProject === Projects.length - 1 ? (
                        <div className="w-3 h-10 rounded-md bg-stone-200" />
                    ) : (
                        <BsChevronRight />
                    )}
                </button>
            </div>
        </div>
    );
}

export default ProjectSection;
