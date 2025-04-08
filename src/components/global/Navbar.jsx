import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1>logo</h1>
      <ul className="flex space-x-4">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/service">
          <li>Services</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div className="flex">
        <Link to="/login">
        <button>Login</button>
        </Link>
        <Link to="/register">
        <button>Sign up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
