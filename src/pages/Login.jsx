import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const formData = { email: "dosolobuhe@mailinator.com", password: "123456" };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(formData);
    console.log(res, "Login");

    if (res.data.other.role === 2) {
      navigate("/");
    } else {
      navigate("/api-fetch");
    }
  };
  return (
    <>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
