import React from "react";
import NavBar from "../components/NavBar";
import ServicesContent from "./components/ServicesContent";
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
      <Footer />
    </div>
  );
};

export default Services;
