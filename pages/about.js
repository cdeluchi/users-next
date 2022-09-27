import React from "react";
import Head from "next/head";
import { createUseStyles } from "react-jss";

const about = () => {
  // const classes = useStyles({});
  return (
    <>
      <Head>
        <title>Next | About</title>
        <meta name="keywords" content="about" />
      </Head>
      <div className={classes.content}>
        <h1>About page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};
const useStyles = createUseStyles({
  content: {
    maxWidth: "960px",
    margin: "0 auto",
  },
});

export default about;
