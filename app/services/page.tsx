import React from "react";
import NavBar from "../components/NavBar";
import AboutContent from "../about/components/AboutContent";
import ServicesContent from "./components/ServicesContent";
import DemoSection from "./components/DemoSection";
import RelayControl from "./components/Relay/relay";
import ServicesGallery from "./components/ServicesGallery";

export const Services = () => {
  return (
    <div>
      <NavBar />
      <ServicesContent />
      <ServicesGallery />
      {/* <DemoSection />
      <RelayControl /> */}
    </div>
  );
};

export default Services;
