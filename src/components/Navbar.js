import React from "react";
import "./style.css";
import logo from "../Images/wedevwebs logo.png";

function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow dark:bg-gray-800">
        <div className="nav-bar container flex items-center justify-between">
          <img src={logo} alt="Logo" style={{ height: "3rem" }} />
          <div className="pages container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <a
              href="/"
              className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
            >
              home
            </a>

            <a
              href="/"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              About
            </a>

            <a
              href="/"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Services
            </a>

            <a
              href="/"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
             Pricing
            </a>
            <a
              href="/"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
             Blog
            </a>
            <a
              href="/"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
             Contact
            </a>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
