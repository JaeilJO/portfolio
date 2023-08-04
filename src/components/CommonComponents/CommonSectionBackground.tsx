import { ReactNode, RefObject } from 'react';

function CommonSectionBackground({
    children,
    ref_for_observer,
}: {
    children: ReactNode;
    ref_for_observer?: (node?: Element | null | undefined) => void;
}) {
    return (
        <div
            ref={ref_for_observer}
            className="relative flex w-screen h-full bg-red-200 border-2 border-purple-300 max-sm:flex-col max-sm:w-full max-sm:h-[700px]"
        >
            {children}
        </div>
    );
}

export default CommonSectionBackground;
