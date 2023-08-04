function CommonSectionBackground({ children }) {
    return (
        <div className="relative flex w-screen h-screen  max-sm:flex-col max-sm:py-[100px] bg-red-400">{children}</div>
    );
}

export default CommonSectionBackground;
