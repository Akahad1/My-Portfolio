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
    AOS.init({ duration: 1000 });
    fetchItems();
  }, []);

  return (
    <div className=" min-h-screen pb-10">
      {/* Hero Section */}
      <div className="hero mt-20 px-5 lg:px-20 mb-10">
        <div className="lg:flex items-center gap-10 justify-center max-w-screen-lg mx-auto px-4 lg:px-8 mb-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 " data-aos="fade-left">
            <img
              src={img1}
              alt="Ashraful Karim Saad"
              className="rounded-lg shadow-lg w-80 border-4 border-gray-700 max-h-96 object-cover 
             hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out 
             relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-gray-900 before:opacity-50"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-2/3 text-white text-left" data-aos="fade-right">
            <h1 className="text-5xl font-semibold mb-4">Hi,</h1>
            <h2 className="text-4xl font-semibold">
              I'm <span className="text-indigo-400">Ashraful Karim Saad</span>
            </h2>
            <p className="mt-4 text-gray-300 leading-7">
              A passionate Front-End Developer with expertise in crafting
              user-centric, visually appealing web applications. I specialize in
              HTML5, CSS, JavaScript, React, TypeScript, Redux, Mongooes
              Tailwind CSS, and modern frameworks like Next.js. With a strong
              focus on responsive design and seamless user experiences, I aim to
              bring ideas to life through clean, efficient code. I’m constantly
              learning and seeking opportunities to create impactful digital
              solutions.
            </p>
            <p className="mt-4 text-gray-300 leading-7">
              I consider myself a quick learner, self-motivated, and disciplined
              individual who thrives under pressure and solves problems
              analytically with the latest technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <p className="text-center text-3xl font-semibold text-indigo-400">
          My Skills
        </p>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-5 lg:px-20">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex items-center bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow relative group"
              data-aos="fade-up"
            >
              {/* Image Section */}
              <img
                className="lg:w-20 w-16 rounded-md mr-4"
                src={item?.image}
                alt={item?.name}
              />

              {/* Skill Name */}
              <p className="text-white text-lg font-medium">{item?.name}</p>

              {/* Description Overlay */}
              <div className="absolute w-full inset-0 bg-gray-900 bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 rounded-lg transition-opacity duration-300 group hover:bg-opacity-90">
                <div className="text-white text-center text-sm p-4 rounded-lg bg-gradient-to-r bg-black shadow-lg transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out">
                  <p className="text-white text-shadow-lg">
                    {item?.description.slice(0, 200)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
