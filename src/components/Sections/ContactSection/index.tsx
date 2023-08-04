import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useAlert } from '@/zustand/contactAlertStore';
import CommonSectionBackground from '@/components/CommonComponents/CommonSectionBackground';
import CommonLeftText from '@/components/CommonComponents/CommonLeftText';
import CommonRightContentWrapper from '@/components/CommonComponents/CommonRightContentWrapper';

function ContactSection() {
    const textarea = useRef<HTMLTextAreaElement>(null!);
    const [appearAlert, resetAlert] = useAlert((state) => [state.appearAlert, state.resetAlert]);
    const handleResizeHeight = () => {
        if (textarea.current) {
            textarea.current.style.height = 'auto';
            textarea.current.style.height = textarea.current.scrollHeight + 'px';
        }
    };

    const form = useRef<HTMLFormElement>(null!);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SEVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            )
            .then(
                (result) => {
                    form.current && form.current.reset();
                    appearAlert();
                    setTimeout(() => {
                        resetAlert();
                    }, 5000);
                },
                (error) => {
                    alert('something is worng');
                    form.current && form.current.reset();
                }
            );
    };

    return (
        <CommonSectionBackground>
            <CommonLeftText title="Contact" />
            <CommonRightContentWrapper>
                <div className="w-full h-full max-sm:max-h-[70%] ">
                    <form
                        className="flex flex-col justify-between w-full h-full max-sm:px-6 "
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            className="p-3  rounded-none mt-1  text-[18px] font-thin border-b-2 bg-transparent border-stone-200  placeholder:font-light  focus:outline-none max-sm:text-[16px] placeholder:text-neutral-900 dark:placeholder:text-neutral-50 "
                            required
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-3  rounded-none mt-1  text-[18px] font-thin border-b-2 bg-transparent border-stone-200  placeholder:font-light  focus:outline-none max-sm:text-[16px] placeholder:text-neutral-900 dark:placeholder:text-neutral-50 "
                            required
                        />
                        <textarea
                            className="p-3  rounded-none max-h-[220px]  text-[18px] font-thin bg-transparent placeholder-opacity-0 border-b-2  placeholder:font-light focus:outline-none placeholder:text-neutral-900 dark:placeholder:text-neutral-50"
                            ref={textarea}
                            onChange={handleResizeHeight}
                            rows={1}
                            name={'message'}
                            placeholder="Message"
                            required
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="p-3 text-3xl font-light duration-200 border-4 rounded-lg cursor-pointer border-neutral-50 dark:border-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 bg-neutral-900 text-neutral-50 hover:bg-neutral-700 dark:hover:bg-neutral-400"
                        />
                    </form>
                </div>
            </CommonRightContentWrapper>
        </CommonSectionBackground>
    );
}

export default ContactSection;
