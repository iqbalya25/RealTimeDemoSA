"use client";

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
      className={`flex justify-between py-3 w-full z-10 ${
        isSticky
          ? "bg-gradient-to-r from-blue-400 to-green-400"
          : "bg-opacity-0"
      }`}
      style={{
        position: isSticky ? "fixed" : "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: isSticky ? 100 : 10,
      }}
    >
      <div className="flex flex-row justify-between w-full p-2">
        <div className="flex-shrink-0">
          <h1 className="text-white text-xl font-bold pl-5">Company Name</h1>
        </div>

        <div>
          <a
            href="#"
            className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white  hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-white  hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white  hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
