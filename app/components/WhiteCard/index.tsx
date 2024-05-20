import { ReactNode } from "react";

interface WhiteCardProps {
  WhiteCardContent: ReactNode;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ WhiteCardContent }) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 pb-10">
      <div className="rounded-lg shadow-xl overflow-hidden">
        <div className="p-10">{WhiteCardContent}</div>
      </div>
    </div>
  );
};

export default WhiteCard;
