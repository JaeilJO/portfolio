import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactSection() {
    const textarea = useRef<HTMLTextAreaElement>(null!);
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
                    alert('Success');
                    form.current && form.current.reset();
                },
                (error) => {
                    alert('something is worng');
                    form.current && form.current.reset();
                }
            );
    };
    return (
        <div className="flex w-screen h-screen max-sm:flex-col max-sm:my-[50%] pt-[100px]">
            <div className="flex items-center justify-center grow-[1]  max-sm:items-end text-9xl max-sm:text-6xl ">
                <div className="relative max-sm:bottom-10">Contact</div>
            </div>

            <div className="flex items-center justify-center grow-[1] text-2xl  max-sm:text-[1.2rem] max-sm:items-start px-10 ">
                <form className="relative flex flex-col justify-center w-full " ref={form} onSubmit={sendEmail}>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        className="p-3 mt-1 mb-10 text-[18px] font-thin border-b-2 border-stone-200 bg-inherit placeholder:font-light  focus:outline-none max-sm:text-[16px] placeholder:text-neutral-900 md:placeholderbg-opacity-0"
                        required
                    />

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-3 mt-1 mb-10 text-[18px] font-thin border-b-2 border-stone-200 bg-inherit placeholder:font-light focus:outline-none max-sm:text-[16px] placeholder:text-neutral-900"
                        required
                    />

                    <textarea
                        className="p-3 mt-1 mb-10 text-[18px] font-thin placeholder-opacity-0 border-b-2 bg-inherit placeholder:font-light focus:outline-none placeholder:text-neutral-900"
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
                        className="p-3 text-3xl font-light duration-200 rounded-lg cursor-pointer dark:bg-neutral-50 dark:text-neutral-900 bg-neutral-900 text-neutral-50 dark:hover:bg-stone-200 hover:bg-stone-500 "
                    />
                </form>
            </div>
        </div>
    );
}

export default ContactSection;
