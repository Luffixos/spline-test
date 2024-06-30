import React from "react";
import Spline from "@splinetool/react-spline";
import Logo from "./assets/react.svg"; // Ensure this path is correct

function App() {
  return (
    <div className="font-inter min-h-screen bg-black flex flex-col">
      <nav className="bg-black p-4 flex items-center justify-between shadow-md">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>

        {/* Nav items */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-gray-900 transition duration-300">Home</a>
          <a href="#" className="text-white hover:text-gray-900 transition duration-300">About</a>
          <a href="#" className="text-white hover:text-gray-900 transition duration-300">Contact</a>
        </div>

        {/* Button */}
        <div>
          <button className="bg-blue-500 text-white text-[20px] px-6 py-3 rounded transition duration-300 hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        <div className="flex-1 flex flex-col items-start justify-center p-4 md:p-8 lg:p-12">
          <h1 className="text-[48px] md:text-[82px] lg:text-[125px] text-white leading-tight mb-4">
            We make websites
          </h1>
          <h2 className="text-[14px] md:text-[24px] lg:text-[24px] text-gray-300 mb-8">
            Professional and Modern Web Solutions
          </h2>
          <button className="bg-blue-500 text-white text-[18px] px-8 py-4 rounded transition duration-300 hover:bg-blue-700">
            Get Started
          </button>
        </div>

        <div className="relative flex-1 flex justify-center items-center w-full h-full">
          <Spline scene="https://prod.spline.design/ZnwLNKB5726wEibj/scene.splinecode" />
        </div>
      </div>

      {/* New Section */}
      <div className=" min:h-[600px] flex flex-1 bg-black p-4 md:p-8 lg:p-12">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] text-white leading-tight mb-4">
            Our Services
          </h2>
          <p className="text-[16px] md:text-[20px] lg:text-[24px] text-gray-300 mb-8">
            We offer a variety of web development services to help you build modern and professional web solutions. From front-end development to back-end integration, we've got you covered.
          </p>
          <button className="bg-blue-500 text-white text-[18px] px-8 py-4 rounded transition duration-300 hover:bg-blue-700">
            Learn More
          </button>
        </div>

        {/* <div className="absolute flex-1 flex justify-center items-center ">
          <Spline scene="https://prod.spline.design/ZnwLNKB5726wEibj/scene.splinecode" />
        </div> */}
      </div>
    </div>
  );
}

export default App;
