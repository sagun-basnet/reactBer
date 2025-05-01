import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const init = {
    name: "",
    address: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.length === 0) {
      toast.error("Name is required");
      return;
    }

    await axios
      .post("http://localhost:5055/api/postUser", formData)
      .then((res) => {
        console.log(res, ":post form data");
        // setData(res.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
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
