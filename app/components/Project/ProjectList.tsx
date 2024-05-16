import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

interface ProjectItem {
  title: string; // Tambahkan properti title
  project1: string;
}

interface ProjectProps {
  projectListItem: ProjectItem[];
}

const ProjectList: React.FC<ProjectProps> = ({ projectListItem }) => {
  return (
    <div>
      {projectListItem.map((project, index) => (
        <div key={index} className="p-5">
          <Accordion allowMultiple>
            {/* Gunakan properti title untuk judul AccordionItem */}
            <AccordionItem key={index}>
              <h2 className="py-3 text-2xl">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <div>{project.title}</div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div className=" rounded-md text-white font-normal ">
                  {project.project1}
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
