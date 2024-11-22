import { createBrowserRouter } from "react-router-dom";
import About from "../../Componet/About/About";
import Blog from "../../Componet/Blog/Blog";
import Contract from "../../Componet/Contact/Contract";
import Home from "../../Componet/Home/Home";
import Main from "../../Componet/Main/Main";

import Project from "../../Componet/Project/Project";

import Muntajat from "../../Componet/AmerkithenDetal/Muntajat";
import Dashboard from "../../Componet/Dashboard/Dashboard";

import AddProject from "../../Componet/Dashboard/Project/AddProject/AddProject";
import AddSkils from "../../Componet/Dashboard/Skiills/AddSkils/AddSkils";
import AddBlog from "../../Componet/Dashboard/Blog/AddBlog/AddBlog";
import GetProject from "../../Componet/Dashboard/Project/GetProject/GetProject";
import GetSkills from "../../Componet/Dashboard/Skiills/GetSkills/GetSkills";
import ProjectDetails from "../../Componet/ProjectDetails/ProjectDetails";
import GetBlog from "../../Componet/Dashboard/Blog/GetBlog/GetBlog";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "/", element: <Main></Main> },
      { path: "/about", element: <About></About> },
      { path: "/conract", element: <Contract></Contract> },
      { path: "/project", element: <Project></Project> },
      { path: "/amerkitchen", element: <Muntajat></Muntajat> },

      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/project/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/api/projcet/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "addBlog", element: <AddBlog></AddBlog> },
      { path: "addSkils", element: <AddSkils></AddSkils> },
      {
        path: "addProject",
        element: <AddProject></AddProject>,
      },
      {
        path: "getProject",
        element: <GetProject></GetProject>,
      },
      {
        path: "getSkils",
        element: <GetSkills></GetSkills>,
      },
      {
        path: "getBlog",
        element: <GetBlog></GetBlog>,
      },
    ],
  },
]);
export default route;
