import { BsFillCursorFill } from 'react-icons/bs';

function Explanation() {
    return (
        <div className="absolute flex items-center justify-center w-full h-full lg:text-3xl md:text-xl text-neutral-700 dark:text-stone-50 ">
            <div className="relative w-[100%]  h-[50%] max-sm:-top-[18%]">
                <div className="absolute w-full h-full bg-black rounded-xl opacity-10" />
                <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4  animate-section_skill_click_animation">
                    <BsFillCursorFill />
                </div>
                <div className="absolute  font-thin text-[0.8em] bottom-10 left-2/4 -translate-x-2/4  text-center ">
                    Click to see More
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-[10%] -translate-y-[60%] rounded-full  border-2 border-neutral-700 dark:border-neutral-50   animate-section_skill_click_round_animation" />
            </div>
        </div>
    );
}

export default Explanation;
