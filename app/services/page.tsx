import React from "react";
import NavBar from "../components/NavBar";
import AboutContent from "../about/components/AboutContent";
import ServicesContent from "./components/ServicesContent";
import DemoSection from "./components/DemoSection";
import RelayControl from "./components/Relay/relay";

export const Services = () => {
  return (
    <div>
      <NavBar />
      <ServicesContent />
      <DemoSection />
      <RelayControl />
    </div>
  );
};

export default Services;
