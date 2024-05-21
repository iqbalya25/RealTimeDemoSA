"use client";

import React, { useState, useEffect } from "react";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const texts = [
    "Let's Automate the World",
    "Let's Digitalize the World",
    "Let's Connect the World",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex h-screen"
      style={{
        background: "linear-gradient(90deg, #bdc3c7, #2c3e50)",
      }}
    >
      <div className="inset-0 opacity-20">
        <img
          src="https://res.cloudinary.com/djyevwtie/image/upload/v1716186030/assetscc/wanmgsuqvy6jq12ua3je.webp"
          alt="Heroimg"
          className="w-full h-full object-cover"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>
      <div className="flex justify-center items-center w-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1
            className="text-xl md:mb-4 md:text-6xl font-bold text-white font-light"
            style={{
              opacity: fade ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {texts[textIndex]}
          </h1>
          <h2 className="text-sm md:text-2xl text-yellow-300 font-semibold">
            For Better Future
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
