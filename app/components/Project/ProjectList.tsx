interface ProjectItem {
  project1: string;
  project2: string;
  project3: string;
}

interface ProjectProps {
  projectListItem: ProjectItem[];
}

const ProjectList: React.FC<ProjectProps> = ({ projectListItem }) => {
  return (
    <div>
      {projectListItem.map((projects, index) => (
        <div key={index}>
          {Object.entries(projects).map(([key, value]) => (
            <p key={key} className="p-4">
              {value}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
