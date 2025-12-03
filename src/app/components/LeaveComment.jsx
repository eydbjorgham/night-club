import Button from "./Button";

const LeaveComment = () => {
  return (
    <div className="m-auto w-[80vw] gap-4 mb-32">
      <div className="flex gap-8">
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
      </div>
      <form action="input" className="mt-8 text-white">
        <textarea
          placeholder="Your Comment"
          className="w-full resize border border-white bg-transparent p-2 pt-4 pb-4 pl-4 outline-none placeholder:text-white"
          rows="4"
        ></textarea>
      </form>
      <div className="flex justify-end mt-4 capitalize">
        <Button text="submit" />
      </div>
    </div>
  );
};

export default LeaveComment;
