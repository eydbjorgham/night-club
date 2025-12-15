"use client";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


const LeaveComment = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("form submitted", data);
  };


  return (
    <div className="m-auto mb-32 w-[80vw] gap-4">
      <h1 className="mb-15 text-3xl font-bold text-(--secondary-color) uppercase">
        Leave a comment
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="text-white">
        <div className="flex gap-8">
          <div className="flex-1">
            {errors.username && (
              <p className="mb-2 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
            <input
              type="text"
              id="username"
              {...register("username", { required: "Please enter a valid name" })}
              placeholder="Your Name"
              className="w-full border border-white bg-transparent p-4 outline-none placeholder:text-white"
            />
          </div>

          <div className="flex-1">
            {errors.email && (
              <p className="mb-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Please enter a valid email address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Your Email"
              className="w-full border border-white bg-transparent p-4 outline-none placeholder:text-white"
            />
          </div>
        </div>

        <div className="mt-8">
          {errors.comment && (
            <p className="mb-2 text-sm text-red-500">
              {errors.comment.message}
            </p>
          )}
          <textarea
            placeholder="Your Comment"
            id="comment"
            {...register("comment", {
              required: "Please enter a valid comment",
            })}
            className="w-full resize border border-white bg-transparent p-4 outline-none placeholder:text-white"
            rows={4}
          ></textarea>
        </div>

        <DevTool control={control} />

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            text="Submit"
            className="w-max cursor-pointer border-t-2 border-b-2 border-(--secondary-color) px-16 py-4 text-(--secondary-color) capitalize transition-all duration-300 ease-in-out hover:bg-(--secondary-color) hover:text-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveComment;
