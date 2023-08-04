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
        <CommonSectionBackground ref_for_observer={ref}>
            <CommonLeftText title="About" />
            <CommonRightContentWrapper>
                <div className="w-full h-full break-words font-thin max-sm:text-[1rem] text-[1.3rem] flex flex-col gap-2 max-sm:justify-start justify-center ">
                    <div className="text-[2rem] font-light">
                        <span className="mr-[0.3em]">My name is</span>
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
        </CommonSectionBackground>
    );
}

export default AboutSection;
