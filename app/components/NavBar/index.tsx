"use client";

import {
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CustomDrawer from "./CustomDrawer";
import styled from "styled-components";

const NavBar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const GrayBackgroundCustomDrawer = styled(CustomDrawer)`
    background: gray;
  `;

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
      className={`flex justify-between py-3 w-full font-trueno${
        isSticky ? "" : " bg-opacity-0"
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
      <nav className="hidden md:flex flex-row justify-between w-full py-2 px-6 items-center">
        <Link href="/" className="flex-shrink-0">
          <img src="/SA.png" alt="sundayautomation" className="w-36" />
        </Link>

        {/* Menu items */}
        <div>
          <Link
            href="/"
            className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            Services
          </Link>
          <Link
            href="/teams"
            className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            Teams
          </Link>
        </div>
      </nav>

      <div className="flex flex-row justify-between w-screen md:hidden">
        <Link href="/" className="flex-shrink-0">
          <img src="/SA.png" alt="" className="w-36" />
        </Link>
        <Button
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          className={`pr-6 ${isOpen ? "!hidden" : "block"}`}
        >
          <img
            src="/hamburger.png"
            alt="menu"
            className="w-8"
            style={{ filter: "invert(1)" }}
          />
        </Button>
      </div>

      <CustomDrawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        style={{
          backgroundColor: "rgb(44, 62, 80)",
          position: "fixed",
          zIndex: 9999,
          top: 80,
          height: "100vh",
        }}
      >
        <DrawerBody className="flex flex-col text-right">
          <Link
            href="/"
            className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            Services
          </Link>
          <Link
            href="/teams"
            className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            Teams
          </Link>
        </DrawerBody>
      </CustomDrawer>
    </div>
  );
};

export default NavBar;
