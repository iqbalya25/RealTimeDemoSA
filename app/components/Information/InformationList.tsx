"use client";

import { ReactNode } from "react";
import Card from "../BigCard";
import SmallCard from "../SmallCard";

interface InfoItemList {
  value: ReactNode;
  caption: ReactNode;
}

interface InfoItemProps {
  InfoListingItem: InfoItemList[];
}

const InformationList: React.FC<InfoItemProps> = ({ InfoListingItem }) => {
  return (
    <div className="flex flex-col justify-between items-center md:flex-row">
      {InfoListingItem.map((InfoListing, index) => (
        <SmallCard key={index}>
          {Object.entries(InfoListing).map(([key, value]) => (
            <p key={key} className="flex justify-center text-2xl">
              {value}
            </p>
          ))}
        </SmallCard>
      ))}
    </div>
  );
};
export default InformationList;
