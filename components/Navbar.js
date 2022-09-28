import React from "react";
import { createUseStyles } from "react-jss";
import Link from "next/link";

const Navbar = () => {
  const classes = useStyles({});
  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.logo}>Logo</h1>
        <nav className={classes.nav}>
          <Link href="/">
            <a className={classes.linkNav}>Home</a>
          </Link>
          <Link href="/about">
            <a className={classes.linkNav}>About</a>
          </Link>
          <Link href="/links">
            <a className={classes.linkNav}>Links</a>
          </Link>
        </nav>
      </div>
    </>
  );
};

const useStyles = createUseStyles({
  wrapper: {
    maxWidth: 960,
    margin: "10px auto 80px",
    padding: "10px 0",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    marginRight: "auto",
    borderRadius: 5,
  },

  nav: {
    width: "30%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  linkNav: {
    margin: 12,
    color: "#333",
    textDecoration: "none",
  },
});
export default Navbar;
