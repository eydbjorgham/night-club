const SubmitEmail = () => {
    return (
      <section className="mt-16 flex flex-col items-center text-white">
        <h1 className="uppercase">want the latest night club news</h1>
        <h3>
          Subscribe to our newsletter to never miss an{" "}
          <a href="" className="text-(--tertiary-color) capitalize">
            event
          </a>
        </h3>
        <div>
          <form action="input" className="mt-4 flex gap-4 text-white">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border-b-2 border-white bg-transparent pb-2 outline-none placeholder:text-white"
            />
          </form>
        </div>
      </section>
    );
}
 
export default SubmitEmail;