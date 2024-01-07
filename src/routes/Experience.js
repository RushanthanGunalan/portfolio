import React from "react";
import ExperienceCard from "../components/Experience/ExperienceCard";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar/Navbar";

const Experience = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading={"Experience"} text={""} />
      <ExperienceCard />
      <Footer />
    </>
  )
}

export default Experience