import React from "react";
import img1 from "../../imges/my-image.png";
const About = () => {
  return (
    <div className=" ">
      <div className="hero mt-20 ">
        <div className="lg:flex mb-4">
          <div className="w-full mr-3">
            <img src={img1} alt="" />
          </div>
          <div className=" lg:ml-0 md:ml-0 ml-5  ">
            <div className="text-left">
              <h1 className="text-4xl text-white font-bold">HI</h1>
              <h1 className="text-3xl text-white mt-3 ">
                I'M <span>Ashraful Karim Saad</span>
              </h1>
              <p className="py-4 text-white">
                I am Front End Developer. Always passionate about new
                information & technologies. Striving to never stop learning and
                improving. Look forward to Working with a creative team to
                improve my skill and add value. Building easy-to-use,
                user-friendly websites, and applications is truly a passion of
                mine. I am an expert in HTML, CSS, Bootstrap, Tailwind,
                JavaScripts, React, Firebase, ExpressJs, NodeJs, and MongoDB.In
                addition to my knowledge, I consider myself a quick learner,
                self-motivated, responsible, and disciplined person who can work
                under pressure and solve problems in critical situations with
                analytical knowledge and the latest technolog.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl mt-4 text-white">My Skils</p>
      </div>
    </div>
  );
};

export default About;
