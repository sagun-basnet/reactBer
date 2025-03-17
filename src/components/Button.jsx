import React from "react";

const Button = ({ text, color }) => {
  console.log(text);
    





  return (
    <button
      style={{ backgroundColor: `${color}` }}
      className={`p-2 px-4 rounded-md text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
