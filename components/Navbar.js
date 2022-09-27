import React from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const classes = useStyles({});
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Image src="/logo.jpg" alt="logo" width={100} height={100} />
        </div>
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
    // background: "salmon",
    maxWidth: 960,
    margin: "10px auto 80px",
    padding: "10px 0",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    marginRight: "auto",
  },

  nav: {
    width: "30%",
    display: "flex",
    // background: "red",
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
