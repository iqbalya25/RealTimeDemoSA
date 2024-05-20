import React from "react";
import MilestoneStructure from "./MilestoneStructure";
import milestonesData from "./MilestoneData";

export const MileStone = () => {
  return (
    <div>
      <main>
        <MilestoneStructure milestones={milestonesData} />
      </main>
    </div>
  );
};

export default MileStone;
