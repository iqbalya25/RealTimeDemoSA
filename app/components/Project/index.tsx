import { ReactNode } from "react";
import Card from "../BigCard";
import ProjectList from "./ProjectList";
import WorkList from "./ProjectCardContent";

const Project = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1000px] font-bold text-white relative">
        <div />
        <Card CardContent={<ProjectList projectListItem={WorkList} />} />
      </div>
    </div>
  );
};
export default Project;
