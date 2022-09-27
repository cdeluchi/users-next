import React from "react";
import { createUseStyles } from "react-jss";

const Footer = () => {
  const classes = useStyles({});
  return (
    <footer className={classes.footer}>
      <p>Copyright 2022</p>
    </footer>
  );
};

const useStyles = createUseStyles({
  footer: {
    display: "block",
    textAlign: "center",
    padding: "30px 0",
    marginTop: "60px",
    color: "#777",
    borderTop: "1px solid #eaeaea",
  },
});
export default Footer;
