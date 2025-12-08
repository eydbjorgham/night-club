"use client";
import { useState, useEffect } from "react";


const RecentBlog = () => {
  const [blogList, setBlogList] = useState([]);


  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch("http://localhost:4000/blogposts");
      const blogList = await response.json();
      setBlogList(blogList);
    };
    fetchBlog();
  }, []);

    const displayedBlog = blogList.slice(0, 3);


  return (
    <div className="mt-(--section-padding) flex justify-center gap-8 leading-8">
      {displayedBlog.map((blog) =>
      <div key={blog.id} className="max-w-sm">
        <img
          src={blog.asset.url}
          alt={blog.title}
          width={300}
          height={300}
          className="h-auto w-full"
          />
        <h2 className="text-lg font-semibold text-(--secondary-color) truncate">{blog.title}</h2>
        <h3 className="text-(--tertiary-color)">{blog.author}</h3>
        <p className="text-(--secondary-color) max-w-prose truncate">{blog.content}</p>
      </div>
        )}
    </div>
  );
};

export default RecentBlog;
