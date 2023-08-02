import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const textarea = useRef<HTMLTextAreaElement>(null!);
  const handleResizeHeight = () => {
    if (textarea.current) {
      textarea.current.style.height = "auto";
      textarea.current.style.height = textarea.current.scrollHeight + "px";
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
          alert("Success");
          form.current && form.current.reset();
        },
        (error) => {
          alert("something is worng");
          form.current && form.current.reset();
        }
      );
  };
  return (
    <div className="flex w-screen h-full min-h-screen max-sm:flex-col ">
      <div className="flex items-center justify-center flex-1 max-sm:items-end text-9xl max-sm:text-6xl">
        <div className="relative max-sm:bottom-10">Contact</div>
      </div>

      <div className="flex items-center justify-center flex-1 px-[10%]  max-sm:p-2">
        <form
          className="relative flex flex-col justify-center w-full "
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="text-2xl font-light max-md:text-center">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="p-3 mt-1 mb-10 text-2xl font-thin border-2 border-stone-200 bg-inherit focus:outline-none max-md:text-center max-sm:text-lg"
            required
          />

          <label className="text-2xl font-light max-md:text-center">Name</label>
          <input
            type="text"
            name="name"
            className="p-3 mt-1 mb-10 text-2xl font-thin border-2 border-stone-200 bg-inherit focus:outline-none max-md:text-center max-sm:text-lg"
            required
          />

          <label className="text-2xl font-light max-md:text-center">
            Message
          </label>
          <textarea
            className="p-3 mt-1 mb-10 text-lg font-thin border-2 bg-inherit focus:outline-none "
            ref={textarea}
            onChange={handleResizeHeight}
            rows={1}
            name={"message"}
            required
          />
          <input
            type="submit"
            value="Submit"
            className="p-3 text-3xl font-light duration-200 cursor-pointer dark:bg-neutral-50 dark:text-neutral-900 bg-neutral-900 text-neutral-50 dark:hover:bg-stone-200 hover:bg-stone-500"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
