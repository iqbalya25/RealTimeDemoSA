import { ReactNode } from "react";

interface CardProps {
  CardContent: ReactNode; // Mengubah tipe prop menjadi ReactNode
}

const Card: React.FC<CardProps> = ({ CardContent }) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 pb-10 relative">
      <div
        className="rounded-lg shadow-lg overflow-hidden relative"
        style={{
          background: "linear-gradient(90deg, #1FA2FF, #12D8FA, #A6FFCB)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="p-4 relative z-10">{CardContent}</div>
      </div>
    </div>
  );
};

export default Card;
