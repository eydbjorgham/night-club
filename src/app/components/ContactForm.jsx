"use client";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";


const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
    const form = useForm();
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isSubmitting } = formState;
    
    const onSubmit = async (data) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      try {
        const response = await fetch("http://localhost:4000/contact_messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.username,
            email: data.email,
            comment: data.comment,
          }),
        });

        if (response.ok) {
          console.log("Comment saved successfully");
          setSuccessMessage("Comment submitted successfully")
          reset();
          setTimeout(() => setSuccessMessage(""), 3000);
        } else {
          console.error("Failed to submit comment");
          setErrorMessage("Failed to submit comment. Please try again."
          )
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

  return (
    <div className="grid-rows-auto mt-(--section-padding) grid grid-cols-3">
      <div className="col-start-2 col-end-2 grid justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-1 flex-col gap-4 text-white"
        >
          <div>
            {errors.username && (
              <p className="mb-2 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
            <input
              type="name"
              action="input"
              id="name"
              {...register("username", {
                required: "Please enter a valid name",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name can only contain letters and spaces",
                }
              })}
              placeholder="Your Name"
              className="input:text-white w-120 border border-white bg-transparent p-4 outline-none placeholder:text-white"
            />
          </div>

          <div>
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
                  message: "An email address has to contain @ and a domain",
                },
              })}
              placeholder="Your Email"
              className="input:text-white w-120 border border-white bg-transparent p-4 outline-none placeholder:text-white"
            />
          </div>

          <div>
            {errors.comment && (
              <p className="mb-2 text-sm text-red-500">
                {errors.comment.message}
              </p>
            )}
            <textarea
              action="input"
              id="comment"
              type="text"
              {...register("comment", {
                required: "Please enter a valid comment",
              })}
              placeholder="Your Comment"
              className="w-full resize border border-white bg-transparent p-2 pt-6 pb-30 pl-4 text-white outline-none placeholder:text-white"
              rows="4"
            ></textarea>
          </div>
          <DevTool control={control} />
          <div className="col-start-2 row-start-2 row-end-2 mt-4 grid justify-end">
            <button
              disabled={isSubmitting}
              className="w-max cursor-pointer border-t-2 border-b-2 border-(--secondary-color) px-16 py-4 text-(--secondary-color) capitalize transition-all duration-300 ease-in-out hover:bg-(--secondary-color) hover:text-black"
              type="submit"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {/* Success besked under button */}
            {successMessage && (
              <p className="mt-4 text-center text-green-500">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="mt-4 text-center text-red-500">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
