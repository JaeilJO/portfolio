import { ReactNode, RefObject, useRef } from 'react';

function CommonSectionBackground({
    children,
    ref_for_observer,
}: {
    children: ReactNode;
    ref_for_observer?: (node?: Element | null | undefined) => void;
}) {
    return (
        <div ref={ref_for_observer} className="relative flex w-full h-full max-sm:flex-col">
            {children}
        </div>
    );
}

export default CommonSectionBackground;
