import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const about = () => {
  return (
    <>
      <Head>
        <title>Next | About</title>
        <meta name="keywords" content="about" />
      </Head>
      <div className="content">
        <h1>About page</h1>
      </div>
    </>
  );
};

export default about;
