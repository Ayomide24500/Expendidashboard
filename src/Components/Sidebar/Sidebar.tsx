import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md fixed lg:block hidden">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Expendy Dashboard</h1>
        <ul>
          <li className="mb-2">
            <Link to="/">
              <a className="block py-2 px-4 text-blue-600 hover:bg-gray-100 rounded">
                Dashboard
              </a>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/statistics">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded">
                Statistics
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
