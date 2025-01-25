import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  // State to toggle the menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex justify-between items-center px-6 py-6 w-full bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">
        <span className="border-4 border-orange-500 text-orange-500 p-4 rounded-full text-center text-2xl">
          E
        </span>
        damy
      </h1>

      {/* Menu icon */}
      <FaBars
        className="sm:hidden flex text-3xl cursor-pointer"
        onClick={toggleMenu} // Toggle menu when clicked
      />
      
      {/* Menu list with drop-down animation */}
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col sm:flex sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0 transition-all ease-in-out duration-300 sm:block absolute sm:static top-16 right-0 bg-blue-500 sm:bg-transparent sm:relative rounded-lg sm:rounded-none`}
      >
        <Link to="/">
          <li className="text-center sm:text-left">Home</li>
        </Link>
        <Link to="/about">
          <li className="text-center sm:text-left">About</li>
        </Link>
        <Link to="/courses">
          <li className="text-center sm:text-left">Courses</li>
        </Link>
        <Link to="/cart">
          <li className="text-center sm:text-left">Cart</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
