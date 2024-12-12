import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData();
  console.log(blog);

  return (
    <div className=" min-h-screen text-white p-6">
      <img
        src={blog.data.images}
        alt={blog.data.title}
        className="w-full h-72 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold">{blog.data.title}</h1>
      <p className="text-gray-400 mt-2">
        {new Date(blog.data.createdAt).toLocaleDateString()}
      </p>
      <p className="mt-6">{blog.data.description}</p>
    </div>
  );
};

export default BlogDetails;
