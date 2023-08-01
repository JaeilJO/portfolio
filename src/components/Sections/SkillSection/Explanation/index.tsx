import { BsFillCursorFill } from "react-icons/bs";

function Explanation() {
  return (
    <div className="absolute flex items-center justify-center w-full h-full text-3xl text-stone-50 dark:text-white">
      <div className="relative w-full flex items-center justify-center max-sm:-top-[11%] h-[50%]  bg-black dark:bg-dark opacity-20 dark:opacity-10 rounded-md"></div>
      <div className="absolute  max-sm:top-[35%] z-20 animate-section_skill_click_animation">
        <BsFillCursorFill />
      </div>
      <div className="absolute top-[55%] max-sm:top-[45%] text-[0.5em] text-center ">
        When you click on the left or right, you can see different skills.
      </div>
      <div className="absolute top-[47%] z-10 left-[50%] rounded-full max-sm:top-[33%] border-2 border-stone-50 dark:border-white w-[1em] h-[1em]  animate-section_skill_click_round_animation" />
    </div>
  );
}

export default Explanation;
