"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

const BlogInfo = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async() => {
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
          className={`flex gap-10 p-4 ${index === 1 ? "flex-row-reverse" : ""}`}
        >
          <img
            src={post.asset.url}
            alt={post.title}
            width={600}
            height={600}
            className="h-100 w-180 object-cover"
          />
          <div className="flex flex-col gap-5">
            <h2 className="mt-4 text-2xl font-semibold text-(--secondary-color)">
              {post.title}
            </h2>
            <h3 className="text-(--tertiary-color)">BY: {post.author}</h3>
            <p className="mt-2 w-lg text-(--secondary-color)">
              {post.content.substring(0, 500)}...
            </p>
            <div className="place-self-end">
              <Button text="Read More" href={`/blog/${post.id}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogInfo;
