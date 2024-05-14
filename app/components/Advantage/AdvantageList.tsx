import React, { ReactNode } from "react";

interface AdvantageProps {
  image: string;
  title: string;
  caption: string;
}

interface AdvProps {
  Advantages: AdvantageProps[][];
}

const AdvantageList: React.FC<AdvProps> = ({ Advantages }) => {
  return (
    <div className="flex flex-col justify-center md:grid grid-cols-3 gap-4">
      {Advantages.map((rowContent, rowIndex) =>
        rowContent.map((advantage, index) => (
          <div
            key={`${rowIndex}-${index}`}
            className="flex flex-col items-center p-5"
          >
            <img
              src={advantage.image}
              alt={advantage.title}
              className="w-14 h-14"
            />
            <h2>{advantage.title}</h2>
            <p>{advantage.caption}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default AdvantageList;
