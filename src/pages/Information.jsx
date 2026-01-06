import React from "react";
import InformationHero from "../components/Information/InformationHero";
import InformationAbout from "../components/Information/InformationAbout";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

export default function Information() {
  return (
    <>
   <Navbar/>
      <InformationHero />
      <InformationAbout />
    <Footer></Footer>
    </>
  );
}
