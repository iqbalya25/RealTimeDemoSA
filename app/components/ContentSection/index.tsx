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
    <div className="flex flex-row">
      <div className="flex justify-start items-center w-1/2">{contentLeft}</div>
      <div className="flex items-center w-1/2">{contentRight}</div>
    </div>
  );
};

export default ContentSection;
