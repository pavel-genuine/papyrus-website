import React from "react";
import { Metadata } from "next";
import AboutMeMain from "@/pages/about/about";

export const metadata: Metadata = {
  title: "Papyrus IMC - About ",
};

const AboutMePage = () => {
  return <AboutMeMain />;
};

export default AboutMePage;
