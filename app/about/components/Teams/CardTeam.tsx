import React, { ReactNode, useEffect, useRef } from "react";

interface CardTeamsProps {
  children: ReactNode;
}

const CardTeams: React.FC<CardTeamsProps> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="opacity-0 transition-opacity duration-1000 flex flex-col justify-center items-center w-[350px] bg-white shadow-2xl rounded-lg p-6 md:w-auto"
    >
      {children}
    </div>
  );
};

export default CardTeams;
