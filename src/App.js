import "./App.css";

import { RouterProvider } from "react-router-dom";
import route from "./Routers/Router/Router";

function App() {
  return (
    // w-full bg-gradient-to-b from-black to-gray-800
    // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
    <div>
      <div className="w-full bg-gradient-to-b from-black to-gray-800 ">
        <RouterProvider router={route}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
