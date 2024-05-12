import { ReactNode } from "react";

interface SmallCardProps {
  children: ReactNode; // Mengubah tipe prop menjadi ReactNode
}

const SmallCard: React.FC<SmallCardProps> = ({ children }) => {
  return (
    <div>
      <div className="px-4 pb-10 w-[300px] relative">
        <div
          className="rounded-lg shadow-lg overflow-hidden relative"
          style={{
            background: "linear-gradient(90deg, #1FA2FF, #12D8FA, #A6FFCB)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="p-4 relative z-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
