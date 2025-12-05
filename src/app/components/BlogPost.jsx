"use client";
import React, { useState, useEffect } from "react";

const BlogPost = ({ id }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:4000/blogposts/${id}`);
      const data = await response.json();
      setPost(data);
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (!post)
    return <div className="mt-16 text-center text-white">Loading...</div>;

  return (
    <section>
      <img src={post.asset.url} alt={post.title} className="m-auto mt-16" />
      <h2 className="m-auto mt-8 w-[80vw] text-white capitalize">
        {post.title}
      </h2>
      <p className="m-auto mt-4 w-[80vw] text-(--tertiary-color)">
        BY: {post.author}
      </p>
      <p className="m-auto mt-8 w-[80vw] pb-8 text-white">{post.content}</p>
    </section>
  );
};

export default BlogPost;
