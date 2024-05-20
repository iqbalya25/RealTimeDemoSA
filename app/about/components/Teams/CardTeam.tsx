import React, { ReactNode } from "react";

interface cardAboutProps {
  children: ReactNode;
}

const CardTeams: React.FC<cardAboutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[350px] bg-white shadow-2xl rounded-lg p-6 md:w-auto">
      {children}
    </div>
  );
};

export default CardTeams;
