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
          background: "linear-gradient(90deg, #bdc3c7, #2c3e50)",
        }}
      >
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-transparent to-black">
          <img
            src="https://res.cloudinary.com/djyevwtie/image/upload/v1716186030/assetscc/wanmgsuqvy6jq12ua3je.webp"
            alt=""
            className="w-full h-full object-cover"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
        <div className="p-4 relative z-10">{CardContent}</div>
      </div>
    </div>
  );
};

export default Card;
