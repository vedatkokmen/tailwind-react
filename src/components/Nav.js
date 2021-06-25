import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex gap-12 justify-center p-4">
        <Link
          className=" hover:bg-indigo-500 px-2 rounded-md  hover:text-white"
          to="/"
        >
          Home
        </Link>
        <Link
          className=" hover:bg-indigo-500 px-2 rounded-md hover:text-white"
          to="/about"
        >
          About
        </Link>
        <Link
          className=" hover:bg-indigo-500 px-2 rounded-md hover:text-white"
          to="/blog"
        >
          Blog
        </Link>
      </nav>
    </>
  );
};

export default Nav;
