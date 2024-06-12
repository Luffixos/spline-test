import React from 'react';
import Spline from '@splinetool/react-spline';
import Logo from './assets/react.svg'; // Correctly import the logo

function App() {
  return (
    <>
      <div>
        <nav className="bg-white p-4 flex items-center justify-between shadow-md">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-10" />
          </div>

          {/* Nav items */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:text-gray-900 transition duration-300">Home</a>
            <a href="#" className="text-black hover:text-gray-900 transition duration-300">About</a>
            <a href="#" className="text-black hover:text-gray-900 transition duration-300">Contact</a>
          </div>

          {/* Button */}
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </nav>
        <div className="flex justify-center items-center h-screen">
          <Spline scene="https://prod.spline.design/ZnwLNKB5726wEibj/scene.splinecode" />
        </div>
      </div>
    </>
  );
}

export default App;
