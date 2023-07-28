function ColumnLineDecorator({ isHovered }: { isHovered: boolean }) {
    return (
        <div className={`relative  ${isHovered ? `animate-increase_width` : ``} top-1.5 origin-left`}>
            <span className="absolute max-lg:h-[2px] max-lg:top-[-1px] w-full h-[3px] top-0 dark:bg-white bg-neutral-900" />
            <span className="absolute max-lg:w-[8px] max-lg:h-[8px] max-lg:border-[2px] max-lg:left-0 max-lg:-top-0.7 w-[10px] h-[10px] border-[3px] -left-2 -top-1 bg-white border-solid border-neutral-900 dark:bg-neutral-900 dark:border-white " />
            <span className="absolute max-lg:w-[8px] max-lg:h-[8px] max-lg:border-[2px] max-lg:right-0 max-lg:-top-0.7  w-[10px] h-[10px] border-[3px] -right-2 -top-1 bg-white border-solid border-neutral-900 dark:bg-neutral-900 dark:border-white  " />
        </div>
    );
}

export default ColumnLineDecorator;
