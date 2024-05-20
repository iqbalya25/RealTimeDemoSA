// components/MilestoneStructure.tsx
import React from "react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface MilestoneStructureProps {
  milestones: Milestone[];
}

const MilestoneStructure: React.FC<MilestoneStructureProps> = ({
  milestones,
}) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-md px-4 md:px-8 lg:max-w-[1000px]">
        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-4xl md:mb-4 text-center p-4">
          Milestone
        </h2>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`mb-28 flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            {/* image - start */}
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                src={milestone.imageUrl}
                loading="lazy"
                alt={`Photo for ${milestone.title}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* image - end */}

            {/* content - start */}
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                {milestone.year}
                <br />
                <br />
                {milestone.title}
              </h2>
              <br />
              <p className="mb-8 max-w-md text-gray-600">
                {milestone.description}
              </p>
            </div>
            {/* content - end */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneStructure;
