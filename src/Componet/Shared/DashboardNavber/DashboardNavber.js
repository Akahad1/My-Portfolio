import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../imges/my-image.png";

const DashboardNavber = ({ cosleSidebar }) => {
  return (
    <div>
      <div className="mt-6  ">
        <div className="avatar ml-12 mt-10 mb-6">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img1} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-white text-3xl ">Ashraful Karim Saad</h1>
          {/* <h1 className='text-white text-xl '>Font End Developer</h1> */}
        </div>
        <div className="flex justify-center lg:ml-7 md:ml-6 ml-7">
          <div>
            <Link onClick={cosleSidebar} to="/">
              <button className="btn   lg:w-52 md:w-44 w-52 mt-6">Home</button>{" "}
            </Link>
            <Link onClick={cosleSidebar} to="/dashboard/addBlog">
              <button className="btn   lg:w-52 md:w-44 w-52 mt-6">
                Add_Blog
              </button>{" "}
            </Link>
            <Link onClick={cosleSidebar} to="/dashboard/addSkils">
              <button className="btn   lg:w-52 md:w-44 w-52 mt-6">
                Add_Skils
              </button>{" "}
            </Link>
            <Link onClick={cosleSidebar} to="/dashboard/getSkils">
              <button className="btn   lg:w-52 md:w-44 w-52 mt-6">
                Get_Skils
              </button>{" "}
            </Link>
            <Link onClick={cosleSidebar} to="/dashboard/addProject">
              <button className="btn   lg:w-52 md:w-44 w-52 mt-6">
                Add_Project
              </button>{" "}
            </Link>
            <Link onClick={cosleSidebar} to="/dashboard/getProject">
              <button className="btn   lg:w-52 md:w-44 w-52 mt-6">
                Get_Project
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavber;
