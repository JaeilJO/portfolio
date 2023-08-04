function CommonRightContentWrapper({ children }) {
    return (
        <div className="bg-green-500 relative flex items-center justify-center grow-[1] w-full h-full  max-sm:items-start max-h-screen max-w-screen">
            <div className="flex items-center justify-center w-full h-full max-sm:items-start bg-sky-900">
                <div className="relative w-[80%] h-[80%] max-w-[500px] max-h-[700px] min-x-[400px] min-y-[200px] overflow-hidden bg-green-300 ">
                    <div className="flex items-center justify-center w-full h-full max-sm:items-start">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default CommonRightContentWrapper;
