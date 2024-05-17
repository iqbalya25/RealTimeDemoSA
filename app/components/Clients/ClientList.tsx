import React from "react";

interface ClientProps {
  Clients: { [key: string]: string }[];
}

const ClientsList: React.FC<ClientProps> = ({ Clients }) => {
  return (
    <div className="flex flex-row justify-center gap-10 p-5">
      {Clients.map((client, index) => (
        <div key={index}>
          {Object.entries(client).map(([key, value]) => (
            <img src={value} alt={key} key={key} className="w-[180px]" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ClientsList;
