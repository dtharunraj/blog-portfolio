import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#090910]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <Link to="/home" className="text-xl font-bold tracking-tight text-white">
          Blog<span className="text-purple-400">Space.</span>
        </Link>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} BlogSpace. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-sm text-gray-400">
          <Link
            to="/home"
            className="transition hover:text-purple-300"
          >
            Home
          </Link>

          <Link
            to="/blogs"
            className="transition hover:text-purple-300"
          >
            Blogs
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
