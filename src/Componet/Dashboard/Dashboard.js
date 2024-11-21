import React from "react";
import { Outlet } from "react-router-dom";
import { BiAlignLeft } from "react-icons/bi";

import { useState } from "react";
import DashboardNavber from "../Shared/DashboardNavber/DashboardNavber";

const Dashboard = () => {
  const [btn, setbtn] = useState(false);
  const opensiderBar = () => {
    setbtn(true);
  };

  const cosleSidebar = () => {
    setbtn(false);
  };
  return (
    <div>
      <div class="container   mx-auto w-full ">
        <div class="flex flex-row flex-wrap py-4">
          <p
            onClick={opensiderBar}
            className={`lg:hidden md:hidden openbtn 
                mt-5 text-3xl ml-5 `}
          >
            <BiAlignLeft></BiAlignLeft>
          </p>
          <aside
            class={`w-full  md:w-80  lg:w-1/4 px-2 sidebar ${btn && "openBar"}`}
          >
            <div class="sticky top-0 p-4  w-full ">
              <ul class="flex  flex-col   overflow-hidden  bg-slate-800 border-shadow">
                <p
                  onClick={cosleSidebar}
                  className={`lg:hidden md:hidden ml-3 mt-3 text-3xl font-bold `}
                >
                  X
                </p>

                <div className="p-6 min-h-screen  flex justify-center">
                  <div className="">
                    <DashboardNavber
                      cosleSidebar={cosleSidebar}
                    ></DashboardNavber>
                  </div>
                </div>
              </ul>
            </div>
          </aside>
          <main
            role="main"
            class=" min-h-screen  sm:w-2/3 md:w-2/4 lg:w-3/4 pt-1 px-2"
          >
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
