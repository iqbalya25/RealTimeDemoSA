"use client";

import React, { useState, useEffect } from "react";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Build a digitalized tomorrow",
    "Build a Greener tomorrow",
    "Build a Neutral carbon tomorrow",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

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
          src="https://res.cloudinary.com/djyevwtie/image/upload/v1716179256/irym2be8cc43dc0pwgjb.jpg"
          alt="Heroimg"
          className="w-full h-full object-cover"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>
      <div className="flex justify-center items-center w-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white font-trueno font-light">
            {texts[textIndex]}
          </h1>
          <h2 className="text-lg text-white">Save The Power!</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
