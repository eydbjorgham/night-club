"use client";
import { number } from "framer-motion";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const BookTableForm = ({ selectedTable }) => {
  const form = useForm({
    defaultValues: {
      number: "",
    },
  });
  const { register, handleSubmit, formState, setValue } = form;
  const { errors, isSubmitting } = formState;

  useEffect(() => {
    if (selectedTable) {
      setValue("number", selectedTable, { shouldValidate: true });
    }
  }, [selectedTable, setValue]);

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await fetch("http://localhost:4000/contact_messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          number: data.number,
          guests: data.guests,
          date: data.date,
          tel: data.tel,
          comment: data.comment,
        }),
      });

      if (response.ok) {
        console.log("Message saved successfully");
      } else {
        console.error("Failed to save message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="m-auto mb-32 w-[80vw] gap-4">
      <h1 className="mb-8 text-3xl font-bold text-white uppercase">
        book a table
      </h1>

      <form
        action="input"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-2 max-sm:flex max-sm:flex-col grid-rows-3 gap-4 text-white"
      >
        <div>
          {errors.name && (
            <p className="mt-2 mb-2 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
          <input
            type="name"
            placeholder="Your Name"
            className="input:text-white w-full border border-white bg-transparent p-4 text-white outline-none placeholder:text-white"
            {...register("name", {
              required: "Navn er påkrævet",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Please enter a valid name",
              },
            })}
          />
        </div>

        <div>
          {errors.email && (
            <p className="mt-2 mb-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
          <input
            type="email"
            placeholder="Your Email"
            className="input:text-white w-full border border-white bg-transparent p-4 outline-none placeholder:text-white"
            {...register("email", {
              required: "Email er påkrævet",
              pattern: {
                value: /@/,
                message: "Email skal indeholde @",
              },
            })}
          />
        </div>
        <div>
          {errors.number && (
            <p className="mt-2 mb-2 text-sm text-red-500">
              {errors.number.message}
            </p>
          )}
          <input
            type="number"
            placeholder="Table Number"
            readOnly
            className="input:text-white w-full border border-white bg-transparent p-4 outline-none placeholder:text-white"
            {...register("number", {
              required: "Please select a table",
            })}
          />
        </div>
        <div>
          {errors.guests && (
            <p className="mt-2 mb-2 text-sm text-red-500">
              {errors.guests.message}
            </p>
          )}
          <input
            type="text"
            placeholder="Number Of Guests"
            className="input:text-white w-full border border-white bg-transparent p-4 outline-none placeholder:text-white"
            {...register("guests", {
              required: "Please enter number of guests",
              min: { value: 2, message: "Minimum 2 guests" },
              max: { value: 8, message: "Maksimum 8 guests" },
              valueAsNumber: true,
            })}
          />
        </div>
        <div>
          {errors.date && (
            <p className="mt-2 mb-2 text-sm text-red-500">
              {errors.date.message}
            </p>
          )}
          <input
            type="date"
            placeholder="Select Date"
            className="input:text-white w-full border border-white bg-transparent p-4 outline-none placeholder:text-white [&::-webkit-calendar-picker-indicator]:invert"
            {...register("date", {
              required: "Please select a date",
            })}
          />
        </div>
        <div>
          {errors.tel && (
            <p className="mt-2 mb-2 text-sm text-red-500">
              {errors.tel.message}
            </p>
          )}
          <input
            type="tel"
            placeholder="Your Contact Number"
            className="input:text-white w-full border border-white bg-transparent p-4 outline-none placeholder:text-white"
            {...register("tel", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{8}$/,
                message: "Please enter a valid 8-digit phone number",
              },
            })}
          />
        </div>
        <div className="col-span-2 row-span-2">
          {errors.text && (
            <p className="mt-2 mb-2 text-sm text-red-500">
              {errors.text.message}
            </p>
          )}
          <textarea
            type="text"
            placeholder="Your Comment"
            className="w-full resize border border-white bg-transparent p-2 pt-4 pb-4 pl-4 outline-none placeholder:text-white"
            rows="4"
            {...register("text", {
              required: "Please leave a message",
              min: { value: 1, message: "Please leave a message" },
              valueAsNumber: true,
            })}
          ></textarea>
        </div>

        <div className="col-span-2 mt-4 flex w-full justify-end text-white">
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-max cursor-pointer border-t-2 border-b-2 border-(--secondary-color) px-16 py-4 text-(--secondary-color) uppercase transition-all duration-300 ease-in-out hover:bg-(--secondary-color) hover:text-black"
          >
            {isSubmitting ? "Booking..." : "Book Table"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookTableForm;
