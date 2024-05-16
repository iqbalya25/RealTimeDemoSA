"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between py-3 w-full z-10${
        isSticky ? "" : "bg-opacity-0"
      }`}
      style={{
        position: isSticky ? "fixed" : "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: isSticky ? 100 : 1,
        background: isSticky
          ? "linear-gradient(90deg, #bdc3c7, #2c3e50)"
          : "none",
      }}
    >
      <div className="flex flex-row justify-between w-full py-2 px-4 items-center">
        <div className="flex-shrink-0">
          <img src="/SA.png" alt="" className="w-28" />
        </div>

        <div>
          <Link
            href="/"
            className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white  hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white  hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Services
          </Link>
          <Link
            href="contact"
            className="text-white  hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
