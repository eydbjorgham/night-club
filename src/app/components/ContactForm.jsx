import Button from "./Button";

const ContactForm = () => {
  return (
    <div className="mt-(--section-padding) grid grid-cols-3 grid-rows-auto">
      <div className="col-start-2 col-end-2 grid justify-center gap-6">
        <form action="input" className="flex-1 text-white">
          <input
            type="name"
            placeholder="Your Name"
            className="input:text-white w-120 border border-white bg-transparent p-4 outline-none placeholder:text-white"
          />
        </form>
        <form action="input" className="flex-1 text-white">
          <input
            type="email"
            placeholder="Your Email"
            className="input:text-white w-120 border border-white bg-transparent p-4 outline-none placeholder:text-white"
          />
        </form>
        <form action="input" className="text-white">
          <textarea
            type="text"
            placeholder="Your Comment"
            className="w-full resize border border-white bg-transparent p-2 pt-6 pb-30 pl-4 outline-none placeholder:text-white"
            rows="4"
          ></textarea>
        </form>
      </div>
      <div className="col-start-2 row-start-2 row-end-2 mt-4 grid justify-end">
        <Button className="capitalize" text="Send" />
      </div>
    </div>
  );
};

export default ContactForm;
