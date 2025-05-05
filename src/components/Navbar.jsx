import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  console.log(currentUser, "Navbar");
  const navigate = useNavigate();

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
      <span className="font-bold">{currentUser?.other.name}</span>
      {currentUser ? (
        <button
          onClick={() => {
            logout();
            toast.success("Logout successfully");
            navigate("/login");
          }}
        >
          Logout
        </button>
      ) : (
        <div className="flex">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Sign up</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
