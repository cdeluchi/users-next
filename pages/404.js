import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>Page not found</h2>
      <p>
        Go to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
