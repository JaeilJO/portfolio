function CommonLeftText({ title }: { title: string }) {
    return (
        <div className="relative  flex items-center justify-center duration-200    w-full h-full  max-sm:-top-[100px]   max-sm:items-end text-9xl max-md:text-7xl  ">
            <div className="relative bottom-10">{title}</div>
        </div>
    );
}

export default CommonLeftText;
