import React from "react";
import { render } from "react-dom";
import { createUseStyles } from "react-jss";
import Home from "../pages";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const classes = useStyle({});
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

const useStyle = createUseStyles({});

export default Layout;
