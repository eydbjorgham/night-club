import React from "react";
import Button from "./Button";

const SubmitEmail = () => {
    return (
      <section className="mt-16 flex flex-col items-center text-white">
        <h1 className="uppercase">want the latest night club news</h1>
        <p>
          Subscribe to our newsletter to never miss an{" "}
          <a href="" className="text-(--tertiary-color) capitalize">
            event
          </a>
        </p>
        <div className="mt-8 flex items-center gap-4 w-[40%] justify-between">
          <form action="input" className="mt-4 flex gap-4 text-white">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border-b-2 w-[24rem] border-white bg-transparent pb-5 outline-none placeholder:text-white input:text-white"
            />
          </form>
          <Button text="Subscribe" />
        </div>
      </section>
    );
}
 
export default SubmitEmail;