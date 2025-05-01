import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const formData = { email: "dosolobuhe@mailinator.com", password: "123456" };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    navigate("/");
  };
  return (
    <>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
