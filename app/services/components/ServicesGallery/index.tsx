// components/ServicesGallery.tsx
import React from "react";
import GalleryStructure from "./GalleryStructure";
import { galleryItems } from "./galleryItem";

const ServicesGallery: React.FC = () => {
  return (
    <div>
      <GalleryStructure galleryItems={galleryItems} />
    </div>
  );
};

export default ServicesGallery;
