import Link from "next/link";
import React from "react";
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
  return (
    <div className="content">
      <h1>All users</h1>
      {links.map((link) => (
        <Link href={"/links/" + link.id} key={link.id}>
          <a className={style.single}>
            <h3>{link.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Links;
