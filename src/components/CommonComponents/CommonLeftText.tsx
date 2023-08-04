function CommonLeftText({ title }: { title: string }) {
    return (
        <div className="relative flex items-center justify-center max-sm:h-[50%] w-full h-full duration-200 bg-red-400 max-sm:items-end text-9xl max-md:text-7xl ">
            <div className="relative bottom-10">{title}</div>
        </div>
    );
}

export default CommonLeftText;
