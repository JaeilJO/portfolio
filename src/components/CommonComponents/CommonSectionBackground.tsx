import { ReactNode, RefObject } from 'react';

function CommonSectionBackground({
    children,
    ref_for_observer,
}: {
    children: ReactNode;
    ref_for_observer?: (node?: Element | null | undefined) => void;
}) {
    return (
        <div ref={ref_for_observer} className="relative flex w-screen h-screen max-sm:flex-col ">
            {children}
        </div>
    );
}

export default CommonSectionBackground;
