import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { format } from "date-fns";

const Blog = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div className="min-h-screen">
      <p className="text-center text-2xl mt-7 mb-7 text-white font-semibold">
        My Blog
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6">
        {blogs.data.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="block p-6 shadow-md border border-slate-700 rounded-lg hover:shadow-xl transition-shadow bg-gray-800"
          >
            <img
              src={blog.images}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="text-sm text-gray-400 mt-3">
              {format(new Date(blog.createdAt), "MMMM dd, yyyy")}{" "}
              {blog.category}
            </p>
            <h2 className="text-xl font-bold text-white mt-3">{blog.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
