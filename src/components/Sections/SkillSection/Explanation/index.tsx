import { BsFillCursorFill } from 'react-icons/bs';

function Explanation() {
    return (
        <div className="absolute z-20 flex items-center w-full h-full max-sm:flex-none text-neutral-700 dark:text-stone-50">
            <div className="absolute flex items-center justify-center  w-full h-[50%] max-sm:h-[50%] max-sm:top-[50%]">
                <div className="absolute w-full h-full rounded-md bg-neutral-900 dark:bg-neutral-100 opacity-10" />
                <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 bg-neutral-900 dark:bg-neutral-100  animate-section_skill_click_animation">
                    <BsFillCursorFill />
                </div>
                <div className="absolute  font-thin text-[0.8em] bottom-10 left-2/4 -translate-x-2/4  text-center  ">
                    Click to see More
                </div>
            </div>
        </div>
    );
}

export default Explanation;
