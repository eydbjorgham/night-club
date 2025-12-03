import Link from "next/link";

const Button = ({ text, href = "#" }) => {
  return (
    <Link href={href}>
      <div className="border-t-2 border-b-2 border-(--secondary-color) px-8 py-4 text-(--secondary-color) hover:bg-(--secondary-color) hover:text-black transition-all duration-300 ease-in-out cursor-pointer w-max">
        {text}
      </div>
    </Link>
  );
};

export default Button;
