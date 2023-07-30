function SkillItem({ icon, title, main_color, side_color }) {
    return (
        <li className=" w-[10em] h-[10em] flex items-center justify-center ">
            <div
                className={`relative flex w-[60%] text-neutral-50 ${main_color} justify-center items-center gap-2 h-[3.5em] text-left skew-x-[25deg] rotate-[-30deg] duration-200 shadow-[-20px_20px_30px_rgba(0,0,0,0.5)] animate-section_skill_animation`}
            >
                <div
                    className={`absolute w-[40px] h-full rotate-0 skew-y-[-45deg] left-[-40px] top-[20px]  ${side_color}`}
                />
                <div
                    className={`absolute w-full h-[40px]  rotate-0 skew-x-[-45deg] bottom-[-40px] left-[-20px] ${side_color}`}
                />
                <span>{icon}</span>
                <span>{title}</span>
            </div>
        </li>
    );
}

export default SkillItem;
