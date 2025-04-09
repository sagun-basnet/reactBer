import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const init = {
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  //   setCount((prev) => prev + 1);
  //   console.log(count);
  // };

  const handleSubmit = (e) => {
    if (formData.name.length === 0) {
      toast.error("Name is required");
      return;
    }

    e.preventDefault();
    console.log(formData);
    setFormData(init);
    toast.success("Form submitted successfully");
  };

  const handleChange = (e) => {
    setFormData((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(formData);

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-4 w-1/3 shadow-2xl p-4 rounded-md"
      >
        <h1 className="font-bold text-4xl uppercase text-center">Register</h1>
        <input
          onChange={handleChange}
          className="w-full p-2 rounded-sm outline-none border-1"
          type="text"
          name="name"
          id=""
          placeholder="Enter name"
          value={formData.name}
          required
        />
        <input
          onChange={handleChange}
          className="w-full p-2 rounded-sm outline-none border-1"
          type="address"
          name="address"
          id=""
          placeholder="Enter address"
          value={formData.address}
        />
        <input
          onChange={handleChange}
          className="w-full p-2 rounded-sm outline-none border-1"
          type="number"
          name="phone"
          id=""
          placeholder="Enter phone"
          value={formData.phone}
        />
        <input
          onChange={handleChange}
          className="w-full p-2 rounded-sm outline-none border-1"
          type="email"
          name="email"
          id=""
          placeholder="Enter email"
          value={formData.email}
        />
        <input
          onChange={handleChange}
          className="w-full p-2 rounded-sm outline-none border-1"
          type="password"
          name="password"
          id=""
          placeholder="Enter password"
          value={formData.password}
        />
        <button
          type="submit"
          className="p-2 w-full bg-green-500 cursor-pointer hover:bg-green-700 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
