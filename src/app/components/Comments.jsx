"use client";
import { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch("http://localhost:4000/comments");
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, []);

  return (
    <div className="m-auto w-[80vw] pb-16 text-white">

      
      <h1 className="mt-8 mb-12 text-3xl font-bold text-white uppercase">
        {/* Her blev der brugt AI til at hjælpe med en funktion til at der kun skulle ses 3 kommentarer */}
        {Math.min(comments.length, 3)} comments
     </h1>

      {comments.slice(0, 3).map((comment) => (
        <div key={comment.id} className="mb-10 w-[70vw] max-sm:w-full">
          <p className="max-sm:text-s mb-6 text-xl text-white">
            {comment.name} -{" "}
            <span className="text-(--tertiary-color)">
              Posted {comment.date?.substring(0, 10)}
            </span>
          </p>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
