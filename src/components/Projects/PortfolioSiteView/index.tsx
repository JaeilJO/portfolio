import { useState } from 'react';

function PortfolioSiteView() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative w-full h-full overflow-hidden"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className={`absolute bg-blue-50 w-[70%] h-[70%] -left-5 -top-10 border-dashed border-4 border-neutral-900 ${
                    hovered ? `animate-projects_portofoliosite_view_up_box` : ``
                }
                
                `}
            >
                <div className="absolute bg-neutral-50 w-[20px] h-[20px] -right-2.5 -bottom-2.5 border-neutral-900 border-2 " />
            </div>

            <div
                className={`absolute bg-blue-50 w-[80%] h-[80%] -right-10 -bottom-10 border-dashed border-4 border-neutral-900 ${
                    hovered ? `animate-projects_portofoliosite_view_down_box` : ``
                }`}
            >
                <div className="absolute bg-neutral-50 w-[20px] h-[20px] -left-2.5 -top-2.5 border-neutral-900 border-2 " />
            </div>
        </div>
    );
}

export default PortfolioSiteView;
