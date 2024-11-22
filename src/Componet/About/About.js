import React, { useEffect, useState } from "react";
import img1 from "../../imges/my-image.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/skill");
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
  return (
    <div className=" ">
      <div className="hero mt-20 ">
        <div className="lg:flex mb-4 ">
          <div
            className="w-80 lg:w-full  mr-3 lg:ml-0 ml-5"
            data-aos="fade-left"
          >
            <img src={img1} alt="" />
          </div>
          <div className=" lg:ml-0 md:ml-0 ml-5  ">
            <div className="text-left mt-5" data-aos="fade-right">
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
        <p className="text-center text-2xl mt-4 lg:text-3xl text-white">
          My Skills
        </p>
      </div>
      <div>
        <div className="grid lg:ml-24 ml-4 mt-10 mb-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 justify-center">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex items-center"
              data-aos="fade-up"
            >
              <img
                className="lg:w-20 w-16"
                src={item?.image}
                alt="Item Image"
              />
              {/* Uncomment if you want to show the item's name */}
              <p className="text-white">{item?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
