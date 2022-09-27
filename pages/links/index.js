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
  // console.log(links);
  const classes = useStyles({});
  return (
    <div className="content">
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
  single: {
    padding: "2px 16px",
    background: "red",
    display: "block",
    margin: "20px 10px",
    borderLeft: "8px solid #fff",
    "&:hover": {
      borderLeft: "8px solid #4979ff",
    },
  },
});
export default Links;
