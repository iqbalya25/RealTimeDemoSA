// components/GalleryStructure.tsx
import React from "react";

interface GalleryItem {
  href: string;
  imgSrc: string;
  alt: string;
  label: string;
}

interface GalleryStructureProps {
  galleryItems: GalleryItem[];
}

const GalleryStructure: React.FC<GalleryStructureProps> = ({
  galleryItems,
}) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-8 md:px-10">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Gallery
          </h2>
          <p className="mx-auto max-w-screen-md text-justify text-gray-500 md:text-lg text-justify">
            Services At Sunday Automation, we specialize in providing advanced
            industrial automation solutions and cutting-edge IoT digitalization
            for electrical management. Our services are tailored to enhance
            efficiency and connectivity in industrial, commercial, and
            residential settings. By integrating the latest technologies and
            offering customized solutions, we help our clients achieve optimal
            performance and create smarter, more efficient environments.
          </p>
        </div>
        {/* text - end */}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {galleryItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
            >
              <img
                src={item.imgSrc}
                loading="lazy"
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryStructure;
