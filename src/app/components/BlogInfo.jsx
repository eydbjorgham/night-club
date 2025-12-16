"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

const BlogInfo = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch("http://localhost:4000/blogposts");
      const data = await response.json();
      setBlogPosts(data);
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      {blogPosts.map((post, index) => (
        <div
          key={post.id}
          className={`flex flex-col gap-5 sm:flex-row sm:gap-10 ${index === 1 ? "sm:flex-row-reverse" : ""}`}
        >
          <img
            src={post.asset.url}
            alt={post.title}
            width={600}
            height={600}
            className="h-auto w-full object-cover sm:h-130 sm:w-180"
          />
          <div className="ml-5 flex flex-col gap-5 sm:place-self-center">
            <h2 className="mt-4 text-2xl font-semibold text-(--secondary-color)">
              {post.title}
            </h2>
            <h3 className="text-(--tertiary-color)">BY: {post.author}</h3>
            <p className="max-w-[450px] leading-7 text-md mt-2 w-lg text-(--secondary-color) sm:line-clamp-6 sm:leading-8">
              {post.content.substring(0, 500)}...
            </p>
            <div className="mb-(--section-padding) place-self-center sm:mb-0 sm:place-self-end">
              <Button text="Read More" href={`/blog/${post.id}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogInfo;
