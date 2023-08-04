import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useAlert } from '@/zustand/contactAlertStore';

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
        <div className="flex ">
            {/* <div className="flex items-center justify-center grow-[1]  max-sm:items-end text-9xl max-sm:text-6xl ">
                <div className="relative max-sm:bottom-10">Contact</div>
            </div> */}

            {/* <div className="flex items-center justify-center grow-[1] text-2xl  max-sm:text-[1.2rem] max-sm:items-start px-10  ">
                <form
                    className="relative flex flex-col justify-center min-w-[300px] max-w-[600px] w-full"
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        className="p-3  rounded-none mt-1 mb-10 text-[18px] font-thin border-b-2 bg-transparent border-stone-200  placeholder:font-light  focus:outline-none max-sm:text-[16px] placeholder:text-neutral-900 dark:placeholder:text-neutral-50 "
                        required
                    />

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-3 mt-1 rounded-none mb-10 text-[18px] font-thin border-b-2 bg-transparent border-stone-200   placeholder:font-light focus:outline-none max-sm:text-[16px] placeholder:text-neutral-900 dark:placeholder:text-neutral-50"
                        required
                    />

                    <textarea
                        className="p-3 mt-1 rounded-none max-h-[220px] mb-10 text-[18px] font-thin bg-transparent placeholder-opacity-0 border-b-2  placeholder:font-light focus:outline-none placeholder:text-neutral-900 dark:placeholder:text-neutral-50"
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
                        className="p-3 text-3xl font-light duration-200 border-4 rounded-lg cursor-pointer border-neutral-50 dark:border-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 bg-neutral-900 text-neutral-50 dark:hover:bg-neutral-900 dark:hover:text-neutral-50 dark:hover:border-neutral-50 hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-900 "
                    />
                </form>
            </div> */}
        </div>
    );
}

export default ContactSection;
