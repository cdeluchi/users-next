import React from "react";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import style from "../../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { links: data },
  };
};

const Links = ({ links }) => {
  const classes = useStyles({});
  return (
    <div className={classes.content}>
      <h1>All users</h1>
      {links.map((link) => (
        <Link href={"/links/" + link.id} key={link.id}>
          <a className={classes.single}>
            <h3>{link.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

const useStyles = createUseStyles({
  content: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  single: {
    padding: "2px 16px",
    background: "white",
    boxShadow: "0 0.5px 1px 0 rgba(160, 160, 160, 0.4)",
    display: "block",
    borderRadius: 5,
    margin: "20px 10px",
    borderLeft: "8px solid #fff",
    "&:hover": {
      borderLeft: "8px solid #4979ff",
    },
  },
});
export default Links;
