import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div class="logo">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          borderRadius={15}
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninjas</a>
      </Link>
    </nav>
  );
};

export default Navbar;
