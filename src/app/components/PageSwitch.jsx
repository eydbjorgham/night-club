import { MdKeyboardArrowRight } from "react-icons/md";

const PageSwitch = ({ currentPage = 1 }) => {
  return (
    <nav className="mt-(--section-padding) mb-(--section-padding) flex justify-center gap-2">
      <button
        className={
          currentPage === 1
            ? "border-b-2 border-(--secondary-color) px-1 py-1 text-(--secondary-color)"
            : "bg-transparent px-1 py-1 text-(--secondary-color)"
        }
      >
        1
      </button>
      <button
        className={
          currentPage === 2
            ? "border-b-2 border-(--secondary-color) px-2 py-2 text-(--secondary-color)"
            : "bg-transparent px-2 py-2 text-(--secondary-color)"
        }
      >
        2
      </button>
      <button
        className={
          currentPage === 3
            ? "border-b-2 border-(--secondary-color) px-2 py-2 text-(--secondary-color)"
            : "bg-transparent px-2 py-2 text-(--secondary-color)"
        }
      >
        3
      </button>
      <button className="flex items-center gap-2 bg-transparent px-2 py-2 text-(--secondary-color)">
        næste <MdKeyboardArrowRight size={20} />
      </button>
    </nav>
  );
};

export default PageSwitch;
