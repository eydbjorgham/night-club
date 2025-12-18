// React hook form funktionaliteten til dette component er lavet med hjælp at to forskellige youtube videoer og AI,
// som også er beskrevet i vores synopsis.

"use client";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";


const LeaveComment = () => {
  const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
      const form = useForm();
      const { register, control, handleSubmit, formState, reset } = form;
      const { errors, isSubmitting } = formState;
      
      const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        try {
          // Her bruger vi AI til at sende formulardata (username, email, comment)
          // til backend via en POST request til /contact_messages endpoint
          // Strukturen blev baseret på Troels' undervisning om HTTP methods (POST)
          const response = await fetch(
            "http://localhost:4000/contact_messages",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: data.username,
                email: data.email,
                comment: data.comment,
              }),
            },
          );

          if (response.ok) {
            console.log("Comment saved successfully");
            setSuccessMessage("Comment submitted successfully");
            reset();
            setTimeout(() => setSuccessMessage(""), 3000);
          } else {
            console.error("Failed to submit comment");
            setErrorMessage("Failed to submit comment. Please try again.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };


  return (
    <div className="m-auto mb-32 w-[80vw] gap-4">
      <h1 className="mb-15 text-3xl font-bold text-(--secondary-color) uppercase">
        Leave a comment
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="text-white">
        
        <div className="flex gap-8 max-sm:flex max-sm:flex-col">
          <div className="flex-1">
            {errors.username && (
              <p className="mb-2 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
            <input
              type="text"
              id="username"
              {...register("username", {
                required: "Please enter a valid name",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name can only contain letters and spaces",
                },
              })}
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
            className="w-full resize border border-white bg-transparent pb-50 p-4 outline-none placeholder:text-white"
            rows={4}
          ></textarea>
        </div>

        {/* <DevTool control={control} /> */}

        <div className="mt-4 flex flex-col items-end place-self-end">
          <button
            type="submit"
            text="Submit"
            disabled={isSubmitting}
            className="w-max cursor-pointer border-t-2 border-b-2 border-(--secondary-color) px-16 py-4 text-(--secondary-color) capitalize transition-all duration-300 ease-in-out hover:bg-(--secondary-color) hover:text-black"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {/* Success besked under button */}
          {successMessage && (
            <p className="mt-4 text-center text-green-500">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="mt-4 text-center text-red-500">{errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LeaveComment;
