import { ReactNode } from 'react';

function CommonRightContentWrapper({ children }: { children: ReactNode }) {
    return (
        <div className=" relative flex items-center justify-center max-sm:-top-[50px]   w-full h-full   max-sm:items-start max-h-screen max-w-screen">
            <div className="flex items-center justify-center w-full h-full max-sm:items-start ">
                <div className="relative w-[80%] h-[50%] max-sm:h-full max-sm:w-full max-w-[500px] max-h-[700px] min-x-[400px] min-y-[200px] overflow-hidden ">
                    <div className="flex items-center justify-center w-full h-full max-sm:items-start">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default CommonRightContentWrapper;
