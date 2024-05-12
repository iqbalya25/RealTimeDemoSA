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
                    <h1>Support</h1>
                  </div>
                }
                contentRight={
                  <div className="flex flex-row w-full">
                    <h1>Content</h1>
                    <button>Link</button>
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
