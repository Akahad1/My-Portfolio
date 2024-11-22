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
import Login from "../../Componet/Login/Login";
import ProtectRoute from "../ProtectRoute/ProtectRoute";

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

      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: async () => fetch(`http://localhost:5000/api/blog`),
      },
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
    element: (
      <ProtectRoute>
        <Dashboard></Dashboard>
      </ProtectRoute>
    ),
    children: [
      {
        path: "addBlog",
        element: (
          <ProtectRoute>
            <AddBlog></AddBlog>
          </ProtectRoute>
        ),
      },
      {
        path: "addSkils",
        element: (
          <ProtectRoute>
            <AddSkils></AddSkils>
          </ProtectRoute>
        ),
      },
      {
        path: "addProject",
        element: (
          <ProtectRoute>
            <AddProject></AddProject>
          </ProtectRoute>
        ),
      },
      {
        path: "getProject",
        element: (
          <ProtectRoute>
            <GetProject></GetProject>
          </ProtectRoute>
        ),
      },
      {
        path: "getSkils",
        element: (
          <ProtectRoute>
            <GetSkills></GetSkills>
          </ProtectRoute>
        ),
      },
      {
        path: "getBlog",
        element: (
          <ProtectRoute>
            <GetBlog></GetBlog>
          </ProtectRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
export default route;
