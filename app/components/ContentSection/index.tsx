import { ReactNode } from "react";

interface SectionProps {
  contentLeft: ReactNode;
  contentRight: ReactNode;
}

const ContentSection: React.FC<SectionProps> = ({
  contentLeft,
  contentRight,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex justify-start items-center ">{contentLeft}</div>
      <div className="flex items-center ">{contentRight}</div>
    </div>
  );
};

export default ContentSection;
