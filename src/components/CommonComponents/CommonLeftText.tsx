function CommonLeftText({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-center max-sm:mt-[100px]  md:grow-[1]  w-full h-full max-sm:h-fit bg-blue-300  max-sm:items-end text-9xl max-md:text-7xl  ">
            <div className="relative ">{title}</div>
        </div>
    );
}

export default CommonLeftText;
