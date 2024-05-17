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
            className="flex flex-col gap-2 items-center p-5 text-white"
          >
            <img
              src={advantage.image}
              alt={advantage.title}
              className="w-14 h-14"
              style={{ filter: "invert(1)" }}
            />
            <h2 className="text-2xl font-bold text-yellow-300">
              {advantage.title}
            </h2>
            <p>{advantage.caption}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default AdvantageList;
