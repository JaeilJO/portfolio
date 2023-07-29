type HamburgerBarType = {
  position: string;
  animation: string;
};

function HamburgerBar({ position, animation }: HamburgerBarType) {
  return (
    <div
      className={`absolute w-full h-[3px] opacity-1 bg-neutral-900 dark:bg-neutral-50 rounded-md duration-200 ${position} ${animation} `}
    />
  );
}

export default HamburgerBar;
