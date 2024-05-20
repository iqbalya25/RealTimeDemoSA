import React from "react";
import NavBar from "../components/NavBar";
import AboutContent from "../about/components/AboutContent";
import TeamsContent from "./components";
import TeamsList from "../about/components/Teams";
import Footer from "../components/Footer";

export const Teams = () => {
  return (
    <div>
      <NavBar />
      <TeamsContent />
      <TeamsList />
      <Footer />
    </div>
  );
};
export default Teams;
