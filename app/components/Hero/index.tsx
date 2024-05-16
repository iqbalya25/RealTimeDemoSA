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
        background: "linear-gradient(90deg, #1FA2FF, #12D8FA, #A6FFCB)",
      }}
    >
      <div className="inset-0 opacity-20">
        <img
          src="/MainHero.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>
      <div className="flex justify-center items-center w-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            {texts[textIndex]}
          </h1>
          <h2 className="text-lg text-white">Save The Power!</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
