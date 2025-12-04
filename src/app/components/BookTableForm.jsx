import Button from "./Button";

const BookTableForm = () => {
    return (
      <div className="m-auto mb-32 w-[80vw] gap-4">
        <div className="grid grid-cols-2 grid-rows-3 gap-8">
          <form action="input" className="flex-1 text-white">
            <input
              type="name"
              placeholder="Your Name"
              className="input:text-white w-[35rem] border border-white bg-transparent p-4 outline-none placeholder:text-white"
            />
          </form>
          <form action="input" className="flex-1 text-white">
            <input
              type="email"
              placeholder="Your Email"
              className="input:text-white w-[35rem] border border-white bg-transparent p-4 outline-none placeholder:text-white"
            />
          </form>
          <form action="input" className="flex-1 text-white">
            <input
              type="email"
              placeholder="Table Number"
              className="input:text-white w-[35rem] border border-white bg-transparent p-4 outline-none placeholder:text-white"
            />
          </form>
          <form action="input" className="flex-1 text-white">
            <input
              type="text"
              placeholder="Number Of Guests"
              className="input:text-white w-[35rem] border border-white bg-transparent p-4 outline-none placeholder:text-white"
            />
          </form>
          <form action="input" className="flex-1 text-white">
            <input
              type="date"
              placeholder="Select Date"
              className="input:text-white w-[35rem] border border-white bg-transparent p-4 outline-none placeholder:text-white [&::-webkit-calendar-picker-indicator]:invert"
            />
          </form>
          <form action="input" className="flex-1 text-white">
            <input
              type="tel"
              placeholder="Your Contact Number"
              className="input:text-white w-[35rem] border border-white bg-transparent p-4 outline-none placeholder:text-white"
            />
          </form>
        </div>
        <form action="input" className="mt-8 text-white">
          <textarea
            type="text"
            placeholder="Your Comment"
            className="w-full resize border border-white bg-transparent p-2 pt-4 pb-4 pl-4 outline-none placeholder:text-white"
            rows="4"
          ></textarea>
        </form>
        <div className="mt-4 flex justify-end capitalize">
          <Button className="capitalize" text="reserve" />
        </div>
      </div>
    );
}
 
export default BookTableForm;