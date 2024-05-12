import InfoItem from "./InfoItem";
import InformationList from "./InformationList";

const Information = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1000px] font-bold text-white">
        <InformationList InfoListingItem={InfoItem} />
      </div>
    </div>
  );
};

export default Information;
