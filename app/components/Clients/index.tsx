// Clients.tsx
import React from "react";
import ClientsItem from "./ClientsItem";
import ClientsList from "./ClientList";

const Clients: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-black">Our Clients</h1>
      </div>
      <div className="py-10">
        <ClientsList Clients={ClientsItem} />
      </div>
    </div>
  );
};

export default Clients;
