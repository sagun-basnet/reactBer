import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Form from "./components/Form";
import { IoClose } from "react-icons/io5";
import About from "./pages/About";
import PageNotFound from "./components/PageNotFound";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import SingleProduct from "./components/SingleProduct";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  // const Dashboard = () => {
  //   return (
  //     <>
  //       <Sidebar />
  //       <Topbar />
  //       <Outlet />
  //     </>
  //   );
  // };

  const pageRoute = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/service",
          element: <Services />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/single-product/:id",
      element: <SingleProduct />,
    },
    // {
    //   path: "/dashboard",
    //   element: <Dashboard />,
    //   children: [
    //     {
    //       path: "/user",
    //     },
    //   ],
    // },
  ]);

  return (
    <>
      <RouterProvider router={pageRoute} />

      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
    </>
  );
};

export default App;
