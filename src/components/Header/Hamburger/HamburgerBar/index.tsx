type HamburgerBarType = {
    position: 'top-0' | `bottom-0` | `top-3`;
    animation: string;
};

function HamburgerBar({ position, animation }: HamburgerBarType) {
    return (
        <div
            className={`absolute w-full h-1 opacity-1 bg-neutral-900 dark:bg-neutral-50 rounded-md duration-200 ${position} ${animation} `}
        />
    );
}

export default HamburgerBar;
