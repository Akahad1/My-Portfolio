import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/projcet");
      const data = await response.json();
      setItems(data?.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  useEffect(() => {
    AOS.init({ duration: "1000" });
    fetchItems();
  }, []);

  console.log("items", items);

  return (
    <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-2 lg:ml-12 md:ml-4 ml-0   ">
      {items.map((item) => (
        <div
          key={item._id}
          className="card lg:w-96 md:w-96 w-80 lg:ml-0 md:ml-0 ml-6 bg-gray-900 hover:shadow-md  hover:shadow-slate-800 "
          data-aos="fade-right"
        >
          <figure>
            <img src={item?.images[0]} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl  text-blue-500">
              Project Name: {item?.ProjectName}
            </h2>
            <p className="text-white">{item?.description.slice(0, 100)}...</p>
            <div className="card-actions justify-end">
              <a href={item?.LiveLink}>
                <button className="btn btn-outline btn-success">
                  Live Site
                </button>
              </a>
              <Link to={item?._id}>
                <button className="btn btn-outline btn-success">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
