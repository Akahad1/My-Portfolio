import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="carousel mt-5 w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={data?.images[0]} alt="" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={data?.images[1]} alt="" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={data?.images[2]} alt="" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={data?.images[3]} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center bg-slate-900 w-full py-2 gap-2">
        <a href="#item1" className="btn bg-cyan-900 btn-xs">
          1
        </a>
        <a href="#item2" className="btn bg-cyan-900 btn-xs">
          2
        </a>
        <a href="#item3" className="btn bg-cyan-900 btn-xs">
          3
        </a>
        <a href="#item4" className="btn  bg-cyan-900 btn-xs">
          4
        </a>
      </div>

      <p className="text-2xl ml-2 mt-3  text-white inline mr-2 ">
        Description:
      </p>
      <span className="text-white">{data?.description}</span>
      <p className="text-2xl text-white ml-3 mt-3">Features:</p>
      <div className="flex">
        <p className="mt-3 ml-2 mr-24 text-white">
          {data?.feature[0]} <br />
        </p>
      </div>

      <h1 className="text-2xl ml-2 text-white mt-5">Tools & Technologies:</h1>
      <p className="flex">
        <div className="mr-24 mt-3 ml-2 text-white">
          {data?.ToolsTechnologies}
        </div>
      </p>
      <div className="flex mt-5">
        <a href={data?.LiveLink}>
          <button className="btn btn-outline mr-3 btn-warning">
            Visit Now
          </button>
        </a>
        <a href={data?.ClientSideGithubLink}>
          <button className="btn btn-outline mr-3 btn-warning">
            Sourece code (client)
          </button>
        </a>
        <a href={data.ServerSideGithubLink}>
          <button className="btn btn-outline mr-3 btn-warning">
            Sourece code (Server)
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
