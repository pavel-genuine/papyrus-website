import React from "react";
import { Metadata } from "next";
import SphereMain from "@/pages/service/sphere-details";

export const metadata: Metadata = {
  title: "Papyrus IMC - Service Details page",
};

const ServiceDetailsPage = () => {
  return <SphereMain />;
};

export default ServiceDetailsPage;
