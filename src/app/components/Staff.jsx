import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const Staff = () => {
  return (
    <div className="mt-(--section-padding) flex flex-col items-center gap-5">
      <Image
        src="/assets/content-img/testimonial_3.jpg"
        alt="Illustration"
        width={150}
        height={150}
      />
      <h2 className="font-semibold text-(--secondary-color)">
        Staff Member Name
      </h2>
      <p className="text-(--secondary-color)">Text</p>
      <div className="mt-4 flex justify-center gap-4">
        <div className="border-2 border-white p-2">
          <FaFacebookF size={20} color={"white"} />
        </div>
        <div className="border-2 border-white p-2">
          <FaTwitter size={20} color={"white"} />
        </div>
        <div className="border-2 border-white p-2">
          <FaSnapchatGhost size={20} color={"white"} />
        </div>
      </div>
      <div className="mt-(--padding) flex justify-center gap-2">
        <button className="h-3 w-3 bg-white"></button>
        <button className="h-3 w-3 bg-gray-400"></button>
        <button className="h-3 w-3 bg-gray-400"></button>
      </div>
    </div>
  );
};

export default Staff;
