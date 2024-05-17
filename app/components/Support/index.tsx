import ContentSection from "../ContentSection";
import WhiteCard from "../WhiteCard";

const Support = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1000px]">
        <WhiteCard
          WhiteCardContent={
            <div className="flex flex-col">
              <ContentSection
                contentLeft={
                  <div>
                    <h1 className="text-5xl font-bold">
                      Save Up to 20% on Energy Bills
                    </h1>
                  </div>
                }
                contentRight={
                  <div className="flex flex-col w-full gap-4 justify-center items-center text-center">
                    <h1>
                      Reduce energy bills, carbon footprint with Sunday
                      Automation intelligent energy management Solution.
                    </h1>
                    <button
                      className="transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-gray-300 to-gray-700 text-white border-none px-4 py-2 rounded-md cursor-pointer font-bold w-1/2"
                      style={{
                        background:
                          "linear-gradient(to right, #bdc3c7, #2c3e50)",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background 0.3s",
                      }}
                    >
                      Request Demo
                    </button>
                  </div>
                }
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Support;
