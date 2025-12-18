"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch("http://localhost:4000/blogposts");
      const data = await response.json();
      setBlogPosts(data);
    };

    fetchBlogPosts();
  }, []);

/*Prompt: Tilføj text-white på min p-tekst */
/*note: for at spare tid */

  return (
    <footer className="m-auto mt-(--overskrift-padding-top) w-[90%] pb-16 max-sm:flex-col">
      <div className="space-between flex gap-4">
        <div className="flex flex-1 flex-col justify-evenly text-white uppercase max-sm:gap-12 max-sm:text-center">
          <Link href="/">

            <img className="max-sm:m-auto max-sm:w-[50%]" src="/assets/Logo.png" alt="logo" />

          </Link>

          <div className="">
            <h2 className="text-(--tertiary-color) max-sm:mb-4 max-sm:text-2xl">
              location
            </h2>

            <p>Kompagnistræde 278</p>
            <p> 1265 København K</p>
          </div>
          <div>
            <h2 className="text-(--tertiary-color) max-sm:mb-4 max-sm:text-2xl">
              opening hours
            </h2>
            <p>wed - thu: 10:30 pm to 3 am</p>
            <p> sat - sun: 11 pm to 5 am</p>
          </div>
        </div>

        <div className="flex-1 max-sm:hidden">
          <h2 className="mb-8 text-(--tertiary-color) uppercase">
            recent posts
          </h2>
          {blogPosts.slice(0, 2).map((post) => (
            <div key={post.id} className="mb-8 flex gap-4">
              <a href={`/blog/${post.id}`} className="w-48">
                <img
                  src={post.asset.url}
                  alt={post.title}
                  width={100}
                  height={100}
                  className="h-[100px] w-[100px] object-cover transition-transform duration-300 hover:scale-110"
                />
              </a>

              <div>
                <p className="text-white">{post.content.substring(0, 80)}...</p>
                <p className="mt-6 text-white capitalize">BY: {post.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 max-sm:hidden">
          <h2 className="mb-8 text-(--tertiary-color) uppercase">
            recent posts
          </h2>
          <div className="mb-8 flex">
            <FaTwitter
              size={50}
              height={50}
              className="mr-4 text-(--tertiary-color)"
            />
            <div>
              <p className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias soluta optio
              </p>
              <p className="mt-6 text-white capitalize">5 hours ago</p>
            </div>
          </div>
          <div className="flex">
            <FaTwitter
              size={50}
              height={50}
              className="mr-4 text-(--tertiary-color)"
            />
            <div>
              <p className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias soluta optio
              </p>
              <p className="mt-6 text-white capitalize">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 flex text-white max-sm:mt-24 max-sm:flex-col max-sm:gap-8">
        <div className="flex-1 place-items-center">
          <div className="flex gap-2 max-sm:flex-col max-sm:text-center">
            <p>Night Club PSD Template </p>
            <p className="max-sm:hidden"> - </p>
            <p>All Rights Reserved</p>
          </div>
        </div>
        <div className="m-auto flex-1 place-items-center capitalize max-sm:order-first">
          <p className="place-self-center">stay connected with us </p>
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
        </div>
        <div className="flex-1 place-items-center">
          <p>Copyright © NightClub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
