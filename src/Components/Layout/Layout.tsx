import Dashboard from "../../pages/HomeScreen/Dashboard";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
const Layout = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full lg:flex lg:justify-end">
          <div
            className={`transition-all duration-300 lg:w-[87%] w-full bg-blue-50`}
          >
            <Dashboard />
            <div className="lg:ml-4 lg:mt-20">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
