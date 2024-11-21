import { createBrowserRouter } from "react-router-dom";
import About from "../../Componet/About/About";
import Blog from "../../Componet/Blog/Blog";
import Contract from "../../Componet/Contact/Contract";
import Home from "../../Componet/Home/Home";
import Main from "../../Componet/Main/Main";
import Procodingdetais from "../../Componet/ProcodingDetals/Procodingdetais";
import Project from "../../Componet/Project/Project";
import Resale from "../../Componet/Resale/Resale";
import Muntajat from "../../Componet/AmerkithenDetal/Muntajat";
import Dashboard from "../../Componet/Dashboard/Dashboard";
import AddBlog from "../../Componet/Dashboard/AddBlog/AddBlog";
import AddSkils from "../../Componet/Dashboard/AddSkils/AddSkils";
import AddProject from "../../Componet/Dashboard/AddProject/AddProject";

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
      { path: "/procoding", element: <Procodingdetais></Procodingdetais> },
      { path: "/resale", element: <Resale></Resale> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "addBlog", element: <AddBlog></AddBlog> },
      { path: "addSkils", element: <AddSkils></AddSkils> },
      { path: "addProject", element: <AddProject></AddProject> },
    ],
  },
]);
export default route;
