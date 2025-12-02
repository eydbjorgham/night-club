import Image from "next/image";

const Events = () => {
  return (
    <div>
    <div className="mt-(--section-padding) flex justify-center gap-5">
      <div>
        <Image
          src="/assets/content-img/event-thumb5.jpg"
          alt="Illustration"
          width={500}
          height={500}
          className=""
        />
        <div className="flex gap-5 bg-(--tertiary-color) p-2 text-white">
          <p>Date</p>
          <p>Time</p>
          <p>Location</p>
        </div>
      </div>
      <div>
        <Image
          src="/assets/content-img/event-thumb6.jpg"
          alt="Illustration"
          width={500}
          height={500}
          className=""
        />
        <div className="flex gap-5 bg-(--tertiary-color) p-2 text-white">
          <p>Date</p>
          <p>Time</p>
          <p>Location</p>
        </div>
      </div>
    </div>
      <div className="flex gap-2 justify-center mt-(--padding)">
        <button className="h-3 w-3 bg-white"></button>
        <button className="h-3 w-3 bg-gray-400"></button>
        <button className="h-3 w-3 bg-gray-400"></button>
      </div>
    </div>
  );
};

export default Events;
