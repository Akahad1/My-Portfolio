import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../imges/my-image.png";

const CommonNavber = ({ cosleSidebar }) => {
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
            <Link onClick={cosleSidebar} to="/blog">
              <button className="btn   lg:w-52 md:w-44 w-52 mt-6">Blog</button>{" "}
            </Link>
            <Link onClick={cosleSidebar} to="/about">
              <button className="btn   lg:w-52 md:w-44 w-52 mt-6">About</button>{" "}
            </Link>
            <Link onClick={cosleSidebar} to="/project">
              <button className="btn   lg:w-52 md:w-44 w-52 mt-6">
                Project
              </button>{" "}
            </Link>

            <Link onClick={cosleSidebar} to="/conract">
              <button className="btn   lg:w-52 md:w-44 w-52 mt-6">
                Contact
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonNavber;
