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
      <Home />
      <Footer />
    </div>
  );
};

const useStyle = createUseStyles({
  wrapper: {
    // maxWidth: 960,
    // margin: "0 auto",
  },
});

export default Layout;
