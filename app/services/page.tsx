import React from "react";
import NavBar from "../components/NavBar";
import AboutContent from "../about/components/AboutContent";
import ServicesContent from "./components/ServicesContent";
import DemoSection from "./components/DemoSection";
import RelayControl from "./components/Relay/relay";
import ServicesGallery from "./components/ServicesGallery";
import Footer from "../components/Footer";
import TemperatureDemo from "./components/TemperatureDemo";
import RelayDemo from "./components/RelayDemo";

export const Services = () => {
  return (
    <div>
      <NavBar />
      <ServicesContent />
      <ServicesGallery />
      <TemperatureDemo />
      <RelayDemo />
      {/* <RelayControl /> */}
      <Footer />
    </div>
  );
};

export default Services;
