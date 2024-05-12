import React from "react";

interface SolutionItem {
  no: string;
  title: string;
  caption: string;
}

interface SolutionListProps {
  solutions: SolutionItem[];
}

const SolutionList: React.FC<SolutionListProps> = ({ solutions }) => {
  return (
    <div className="flex flex-row justify-center w-full">
      {solutions.map((solution, index) => (
        <div key={index} className="flex items-center">
          <div className="bg-slate-400 rounded-full h-12 w-12 flex items-center justify-center mr-4">
            <p className="text-4xl font-bold text-white">{solution.no}</p>
          </div>

          <div className="p-10">
            <div>
              <p className="text-4xl font-bold">{solution.title}</p>
            </div>
            <div>
              <p className="text-4xl">{solution.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolutionList;
