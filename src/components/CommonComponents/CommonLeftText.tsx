function CommonLeftText({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-center  grow-[1] w-full h-full   max-sm:items-end text-9xl max-md:text-7xl ">
            <div className="relative max-sm:bottom-10">{title}</div>
        </div>
    );
}

export default CommonLeftText;