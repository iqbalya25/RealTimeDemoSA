import { ReactNode } from "react";

interface WhiteCardProps {
  WhiteCardContent: ReactNode; // Mengubah tipe prop menjadi ReactNode
}

const WhiteCard: React.FC<WhiteCardProps> = ({ WhiteCardContent }) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 pb-10">
      <div className="rounded-lg shadow-lg overflow-hidden bg-white">
        <div className="p-20">{WhiteCardContent}</div>
      </div>
    </div>
  );
};

export default WhiteCard;
