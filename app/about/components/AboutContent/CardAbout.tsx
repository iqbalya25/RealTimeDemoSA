import React, { ReactNode } from "react";

interface cardAboutProps {
  children: ReactNode;
}

const CardAbout: React.FC<cardAboutProps> = ({ children }) => {
  return (
    <div className="w-500px bg-white shadow-2xl rounded-lg p-6">{children}</div>
  );
};

export default CardAbout;
