import React from "react";
import { useLoaderData } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const Blog = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="">
      <p className="text-center text-2xl mt-7 mb-7 text-white">My Blog</p>
      <div className="space-y-6 ml-3 mr-3 lg:mr-10">
        {data?.data.map((blog) => (
          <div
            key={blog.id}
            className="p-6  shadow-md border border-slate-500 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold  text-white">{blog.title}</h2>
            <p className="mt-6 text-sm  text-white">
              {" "}
              Posted{" "}
              {formatDistanceToNow(new Date(blog.createdAt), {
                addSuffix: true,
              })}
            </p>
            <p className="mt-4  text-white">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
