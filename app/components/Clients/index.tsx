import React from "react";
import Marquee from "react-fast-marquee";

const Clients = () => (
  <div className="flex flex-col justify-center items-center gap-5 py-20 relative z-0">
    <h1 className="text-4xl font-bold pb-10">Our Clients</h1>
    <Marquee>
      <div className="flex flex-row gap-20 items-center">
        <div className="px-[4rem]">
          <img
            src="/tesla.png"
            alt="teslalogo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="px-[4rem]">
          <img
            src="/daihatsu.jpg"
            alt="daihatsulogo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="px-[4rem]">
          <img
            src="/astra.jpg"
            alt="astralogo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="px-[4rem]">
          <img
            src="/Denso.png"
            alt="Densologo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="px-[4rem]">
          <img
            src="/Fourseason.png"
            alt="Fourseasonlogo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="px-[4rem]">
          <img
            src="apl.png"
            alt="apllogo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="px-[4rem]">
          <img
            src="ciputran.png"
            alt="ciputralogo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="px-[4rem]">
          <img
            src="winteq.png"
            alt="winteqlogo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
      </div>
    </Marquee>
  </div>
);

export default Clients;
