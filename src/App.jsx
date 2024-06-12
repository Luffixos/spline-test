import React from 'react';
import Spline from '@splinetool/react-spline';
import Logo from './assets/react.svg'; // Correctly import the logo

function App() {
  return (
    <>
      <div>
        <nav className="bg-black p-4 flex items-center justify-between shadow-md px-[450px]">
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
        <h1 className= " px-[450px] py-[250px] flex text-[82px] text-white absolute text-center justify-items-center">
            We make Websites
        </h1>
        <div className="flex justify-right items-right h-screen">
          <Spline scene="https://prod.spline.design/ZnwLNKB5726wEibj/scene.splinecode" />
        </div>
          
      </div>
    </>
  );
}

export default App;
