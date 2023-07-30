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
    return <div className=" w-full h-[100%] bg-red-500  "></div>;
}

export default ProjectSection;
