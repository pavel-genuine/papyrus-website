import React from "react";
import { Metadata } from "next";
import PortfolioStandardMain from "@/pages/portfolio/portfolio-home-papyrus";

export const metadata: Metadata = {
  title: "Liko - Portfolio Standard page",
};

const PortfolioStandardPage = () => {
  return <PortfolioStandardMain />;
};

export default PortfolioStandardPage;
