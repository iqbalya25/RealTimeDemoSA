import React from "react";
import ClientsItem from "./ClientsItem";

const Clients: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-black">Our Clients</h1>
      </div>
      <div className="py-10 overflow-hidden">
        {ClientsItem.map((client, index) => (
          <img
            key={index}
            src={client.logo}
            alt={client.name}
            className="inline-block w-32 h-auto animate-marquee"
            style={{ animationDuration: "5s" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
