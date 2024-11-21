import React from "react";

import { Typewriter } from "react-simple-typewriter";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const Main = () => {
  return (
    <div className=" ">
      <div className="hero min-h-screen ">
        <div className=" lg:ml-0 md:ml-0 ml-5 ">
          <div className="text-left">
            <h1 className="text-4xl text-white font-bold"></h1>
            <h1 className="text-3xl text-white mt-3 ">
              HI <span> I'M Ashraful Karim Saad</span>
            </h1>
            <p className="text-white text-2xl  ">
              I am a{" "}
              <span className="text-white">
                <span style={{ color: "white", fontWeight: "" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={[
                      "FRONT-END DEVELOPER",
                      "MERN STACK DEVELOPER",
                      "WEB DEVELOPER",
                      "REACT DEVELOPER",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </span>
            </p>
            <p className="py-4 text-white">
              I am Front End Developer. Always passionate about new information
              & technologies. Striving to never stop learning and improving.
              Look forward to Working with a creative team to improve my skill
              and add value. Building easy-to-use, user-friendly websites, and
              applications is truly a passion of mine. I am an expert in HTML,
              CSS, Bootstrap, Tailwind, JavaScripts, React, Firebase, ExpressJs,
              NodeJs, and MongoDB.In addition to my knowledge, I consider myself
              a quick learner, self-motivated, responsible, and disciplined
              person who can work under pressure and solve problems in critical
              situations with analytical knowledge and the latest technolog.
            </p>
            <a href="https://drive.google.com/file/d/1ZQcubXMYmbnZ3RL54PgRBOvh4RKQM4Fv/view">
              <button className="btn text-white ">Download Resume</button>
            </a>

            <p className="py-2 text-white">FIND WITH ME</p>
            <div className="mt-5">
              <span className="bg-slate-600 p-3 rounded-full mr-3 ">
                <a href="https://www.linkedin.com/in/ashraful-karim-saad/">
                  <BsLinkedin className="inline text-center text-white w-5 h-5" />
                </a>
              </span>

              <span className="bg-slate-600 p-3 rounded-full mr-3 ">
                <a href="https://github.com/Akahad1">
                  <BsGithub className="inline  text-white w-6 h-6" />
                </a>
              </span>
              <span className="bg-slate-600 p-3 rounded-full mr-3 ">
                <a href="https://www.facebook.com/ak.sahad.5">
                  <BsFacebook className="inline  text-white w-6 h-6" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
