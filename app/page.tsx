import Solution from "@/app/components/Solution";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Information from "./components/Information";
import Support from "./components/Support";
import Advantage from "./components/Advantage";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Dummy from "./components/Dummy";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Solution />
      <Project />
      <Information />
      <Support />
      <Advantage />
      <Clients />
      <Footer />
    </main>
  );
}
