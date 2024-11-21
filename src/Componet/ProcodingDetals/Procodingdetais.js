import React from "react";
import procode from "../../imges/Procoding.png";
import pro1 from "../../imges/Code-master/Screenshot (76).png";
import pro4 from "../../imges/Code-master/Screenshot (77).png";
import pro2 from "../../imges/Code-master/Screenshot (74).png";
import pro3 from "../../imges/Code-master/Screenshot (75).png";

const Procodingdetais = () => {
  return (
    <div>
      <div className="carousel mt-5 w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={pro4} alt="" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={pro1} alt="" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={pro3} alt="" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={pro2} alt="" className="w-full" />
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
      <span className="text-white">
        {" "}
        An Online Programming Course Buy and Selling Website with admin
        controls, secured all necessary pages etc.
      </span>
      <p className="text-2xl text-white ml-3 mt-3">Features:</p>
      <div className="flex">
        <p className="mt-3 ml-2 mr-24 text-white">
          1,Authentication With Email/Password & Google and Github <br />
          2,Courses Section
          <br />
          3,Student can Prient Data
          <br />
        </p>

        <p className="mt-3 ml-2 text-white">
          4,Fully Secured Server
          <br />
          5,Responsive for all Devices
        </p>
      </div>

      <h1 className="text-2xl ml-2 text-white mt-5">Tools & Technologies:</h1>
      <p className="flex">
        <div className="mr-24 mt-3 ml-2 text-white">
          1,React <br></br>
          2,Firebase
          <br />
          3,NodeJS
          <br />
          4,ExpressJS
          <br />
        </div>
        <div className="mt-3">
          5,MongoDB
          <br />
          6,Stripe
          <br />
          7,JWT etc.
        </div>
      </p>
      <div className="flex mt-5">
        <a href="https://codermaster-79114.web.app">
          <button className="btn btn-outline mr-3 btn-warning">
            Visit Now
          </button>
        </a>
        <a href="https://github.com/Akahad1/CoderMaster">
          <button className="btn btn-outline mr-3 btn-warning">
            Sourece code (clint)
          </button>
        </a>
        <a href="https://github.com/Akahad1/CoderMaster-Server">
          <button className="btn btn-outline mr-3 btn-warning">
            Sourece code (Server)
          </button>
        </a>
      </div>
    </div>
  );
};

export default Procodingdetais;
