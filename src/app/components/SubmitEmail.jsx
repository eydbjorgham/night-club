"use client";

import React from "react";
import { useForm } from "react-hook-form";

const SubmitEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Email:", data.email);
  };

  return (
    <section className="mt-16 flex flex-col items-center text-white">
      <h1 className="mb-8 text-2xl font-bold uppercase max-sm:mb-4">
        want the latest night club news
      </h1>
      <p>
        Subscribe to our newsletter to never miss an{" "}
        <a href="" className="text-(--tertiary-color) capitalize">
          event
        </a>
      </p>
      <div className="mt-8 flex w-[40%] items-center justify-between gap-4 max-sm:flex-col">
        <form
          action="input"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-4 flex gap-4 text-white max-sm:flex-col max-sm:gap-12"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input:text-white w-[24rem] border-b-2 border-white bg-transparent pb-5 text-white outline-none placeholder:text-white"
            {...register("email", {
              pattern: {
                value: /@/,
                message: "Email skal indeholde @",
              },
            })}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}

          <button
            className="w-max cursor-pointer border-t-2 border-b-2 border-(--secondary-color) px-16 py-4 text-(--secondary-color) transition-all duration-300 ease-in-out hover:bg-(--secondary-color) hover:text-black max-sm:self-center"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitEmail;
