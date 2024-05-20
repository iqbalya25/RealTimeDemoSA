import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AboutContent from "./components/AboutContent";
import CompanyDetail from "./components/CompanyDetail";
import MileStone from "./components/Milestone";
import TeamsList from "./components/Teams";

export default function About() {
  return (
    <div>
      <NavBar />
      <AboutContent />
      <CompanyDetail />
      <MileStone />
      <TeamsList />
      <Footer />
    </div>
  );
}
