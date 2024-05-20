import Card from "../BigCard";
import ProjectList from "./ProjectList";
import WorkList from "./ProjectCardContent";

const Project = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1000px] font-bold text-white relative">
        <h1 className="text-black text-center text-4xl p-5 font-trueno">
          Energy Management & Analytics Platform
        </h1>
        <Card CardContent={<ProjectList projectListItem={WorkList} />} />
      </div>
    </div>
  );
};

export default Project;
