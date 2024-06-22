import React from "react";
import Header from "./Header";
import Footer from "../Shared/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <div className="nav-bar-position">
        <Header />
      </div>{" "}
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
