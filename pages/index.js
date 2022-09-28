import Head from "next/head";
import Link from "next/link";
import { createUseStyles } from "react-jss";

export default function Home() {
  const classes = useStyles({});
  return (
    <>
      <Head>
        <title>Next | Home</title>
        <meta name="keywords" content="about" />
      </Head>
      <div className={classes.content}>
        <h1 className={classes.title}>homepage</h1>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link href="/links">
          <a className={classes.btn}>See the link</a>
        </Link>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  content: {
    // fontFamily: "roboto",
    maxWidth: "960px",
    margin: "0 auto",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    width: "150px",
    padding: "8px 0",
    margin: "20px auto",
    background: "#4979ff",
    borderRadius: "4px",
    color: "white",
    textAlign: "center",
  },
});
