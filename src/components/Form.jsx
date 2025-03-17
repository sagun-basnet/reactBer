import React from "react";
import Button from "./Button";

const Form = ({ title }) => {
  return (
    <>
      {title === "Register" && <h1 className="text-6xl">Register Form</h1>}
      <h1>{title}</h1>
      <form action="">
        {title === "Login" ? (
          <Button text="login" color="yellow" />
        ) : (
          <Button text="register" color="green" />
        )}
      </form>
    </>
  );
};

export default Form;
