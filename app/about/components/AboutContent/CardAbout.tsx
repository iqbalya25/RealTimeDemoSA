import React, { useEffect, useRef, ReactNode } from "react";

interface CardAboutProps {
  children: ReactNode;
}

const CardAbout: React.FC<CardAboutProps> = ({ children }) => {
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
      className="opacity-0 transition-opacity duration-1000 shadow-xl p-6 bg-white rounded-lg"
    >
      {children}
    </div>
  );
};

export default CardAbout;
