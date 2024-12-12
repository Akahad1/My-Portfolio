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
            to={`/blog/${blog._id}`}
            key={blog.id}
            className="block p-6 shadow-md border border-slate-700 rounded-lg hover:shadow-xl transition-shadow bg-gray-800"
          >
            <div className="relative group w-full h-48 overflow-hidden rounded-md">
              {/* The Image */}
              <img
                src={blog.images}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Sliding Effect */}
              <div className="absolute inset-y-0 left-0 w-0 bg-black/5 backdrop-blur-lg group-hover:w-full transition-all duration-500"></div>
            </div>

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
