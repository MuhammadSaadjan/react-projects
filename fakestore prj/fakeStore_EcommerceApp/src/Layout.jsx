import React from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import Footer from "../src/components/Footer";
import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
      <Footer />
    </>
  );
};

export default Layout;
