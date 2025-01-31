import React from "react";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Applayout;
