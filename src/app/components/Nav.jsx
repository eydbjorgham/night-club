"use client";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [navActive, setNavActive] = useState(false);

  
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="main-border hidden justify-evenly bg-black p-4 text-white uppercase sm:flex">
        <div>
          <Link href="/">
            <img src="/assets/Logo.png" alt="logo" />
          </Link>
        </div>
        <ul className="m-4 flex gap-8">
          <li>
            <Link
              href="/"
              className="relative pb-4 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-black after:via-(--tertiary-color) after:to-black hover:text-(--tertiary-color) hover:after:w-full"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="relative pb-4 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-black after:via-(--tertiary-color) after:to-black hover:text-(--tertiary-color) hover:after:w-full"
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              href="/booktable"
              className="relative pb-4 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-black after:via-(--tertiary-color) after:to-black hover:text-(--tertiary-color) hover:after:w-full"
            >
              book table
            </Link>
          </li>
          <li>
            <Link
              href="/contactus"
              className="relative pb-4 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-black after:via-(--tertiary-color) after:to-black hover:text-(--tertiary-color) hover:after:w-full"
            >
              contact us
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="relative pb-4 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-black after:via-(--tertiary-color) after:to-black hover:text-(--tertiary-color) hover:after:w-full"
            >
              log in
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="main-border flex items-center justify-between bg-black p-4 pr-12 pl-12 text-white uppercase sm:hidden">
        <Link href="/">
          <img
            src="assets/Logo.png"
            alt="logo"
            className="h-8"
            width={150}
            height={50}
          />
        </Link>

        {/* Burger Button */}
        <button
          id="burger"
          onClick={() => setNavActive(!navActive)}
          className="z-50 flex cursor-pointer flex-col gap-1.5"
        >
          <div className="h-0.5 w-6 border border-white"></div>
          <div className="h-0.5 w-6 border border-white"></div>

          <div className="h-0.5 w-6 border border-white"></div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {navActive && (
        <div
          className="fixed inset-0 z-40 bg-black/85"
          onClick={() => setNavActive(false)}
        ></div>
      )}

      {/* Mobile Menu Modal */}
      {navActive && (
        <ul
          id="nav-links"
          className="fixed top-1/2 left-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col justify-center gap-0 rounded-lg border p-4 text-center uppercase"
        >
          {/* Close Button */}
          <button
            onClick={() => setNavActive(false)}
            className="absolute top-4 right-4 cursor-pointer text-2xl text-white transition-colors"
          >
            <RxCross2 size={50} />
          </button>

          <li>
            <Link
              href="/"
              onClick={() => setNavActive(false)}
              className="block px-4 py-3 text-white"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={() => setNavActive(false)}
              className="block px-4 py-3 text-white"
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              href="/booktable"
              onClick={() => setNavActive(false)}
              className="block px-4 py-3 text-white"
            >
              book table
            </Link>
          </li>
          <li>
            <Link
              href="/contactus"
              onClick={() => setNavActive(false)}
              className="block px-4 py-3 text-white"
            >
              contact us
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={() => setNavActive(false)}
              className="block px-4 py-3 text-white"
            >
              log in
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
