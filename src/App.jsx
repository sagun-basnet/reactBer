import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Form from "./components/Form";

const App = () => {
  const fun = () => {
    console.log("fun");
  };
  return (
    <>
      <Button text="More" color="red" myFun={fun()} />
      <Button text="Click" color="blue" />

      <Form title="Login" />
    </>
  );
};

export default App;
