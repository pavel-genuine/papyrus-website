import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Papyrus IMC - Our Areas ",
};

const ServicePage = () => {
  return <ServiceMain />;
};

export default ServicePage;
