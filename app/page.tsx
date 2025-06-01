import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import React from "react";
import Client from "../components/Client";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { IoMdContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { TbQuotes } from "react-icons/tb";
import { SiMicrostrategy } from "react-icons/si";

const navItems = [
  { name: "Projects", icons:<GrProjects /> , link: "#projects" },
  { name: "Quotes", icons: <TbQuotes />, link:"#quotes" },
  { name: "Approach", icons: <SiMicrostrategy />, link: "#approach" },
  { name: "Contact",icons:<IoMdContact /> , link: "#contact" },
];

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Client />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
