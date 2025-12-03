const Nav = () => {
  return (
    <nav className="flex justify-evenly border border-(--tertiary-color) bg-black p-4 text-white uppercase [clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)]">
      <div className="">
        <h1 className="text-3xl">
          night<span className="text-(--tertiary-color)">club</span>
        </h1>
        <p className="text-[0.6em] tracking-[0.5em]">have a good time</p>
      </div>
      <ul className="m-4 flex gap-8">
        <li>
          <a
            href="/"
            className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-black after:via-(--tertiary-color) after:to-black hover:text-(--tertiary-color) hover:after:w-full"
          >
            home
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-black after:via-(--tertiary-color) after:to-black hover:text-(--tertiary-color) hover:after:w-full"
          >
            blog
          </a>
        </li>
        <li>
          <a
            href="/booktable"
            className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-black after:via-(--tertiary-color) after:to-black hover:text-(--tertiary-color) hover:after:w-full"
          >
            book table
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-black after:via-(--tertiary-color) after:to-black hover:text-(--tertiary-color) hover:after:w-full"
          >
            contact us
          </a>
        </li>
        <li>
          <a
            href="/"
            className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-black after:via-(--tertiary-color) after:to-black hover:text-(--tertiary-color) hover:after:w-full"
          >
            log in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
