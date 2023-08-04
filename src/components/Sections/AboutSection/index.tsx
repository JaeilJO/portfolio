import CommonLeftText from '@/components/CommonComponents/CommonLeftText';
import CommonRightContentWrapper from '@/components/CommonComponents/CommonRightContentWrapper';
import CommonSectionBackground from '@/components/CommonComponents/CommonSectionBackground';
import { useInView } from 'react-intersection-observer';
function AboutSection() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.6,
    });

    return (
        <CommonSectionBackground>
            <CommonLeftText title="About" />
            <CommonRightContentWrapper>
                <div className="w-full h-full break-words bg-red-300">
                    <div>
                        <span>My name is</span>
                        <span>Jaeil Jo</span>
                    </div>
                    <div>
                        I am a front-end developer who strives to efficiently implement diverse designs and constantly
                        stays up-to-date with the latest technologies. My passion lies in learning and applying
                        cutting-edge approaches to create visually appealing and highly functional user interfaces. I am
                        dedicated to optimizing user experiences and ensuring seamless interactions through my expertise
                        in front-end development and continuous exploration of innovative design methodologies.
                    </div>
                </div>
            </CommonRightContentWrapper>

            {/* <div className="relative flex items-center  grow-[1] w-full px-5 max-sm:items-start  ">
                <div className="flex flex-col gap-3 ">
                    <div className="flex gap-2 text-4xl max-sm:text-2xl">
                        <span className="font-thin">My name is</span>
                        <span
                            className={`relative before:content=[''] before:w-0 before:h-1 before:bg-blue-300 before:absolute before:-bottom-2 max-sm:before:-bottom-1 ${
                                inView ? `before:animate-section_about_before` : ``
                            }`}
                        >
                            Jaeil Jo
                        </span>
                    </div>
                    <div className="text-2xl font-thin max-sm:text-lg">
                        I am a front-end developer who strives to efficiently implement diverse designs and constantly
                        stays up-to-date with the latest technologies. My passion lies in learning and applying
                        cutting-edge approaches to create visually appealing and highly functional user interfaces. I am
                        dedicated to optimizing user experiences and ensuring seamless interactions through my expertise
                        in front-end development and continuous exploration of innovative design methodologies.
                    </div>
                </div>
            </div> */}
        </CommonSectionBackground>
    );
}

export default AboutSection;
