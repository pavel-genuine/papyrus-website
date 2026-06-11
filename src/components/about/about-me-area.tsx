import React from "react";
import Image from "next/image";
import { Hand } from "../svg";
import shape from "@/assets/img/inner-about/about/shape-1.png";

export default function AboutMeArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-about-content p-relative tp_fade_bottom">
              <p style={{ fontSize: "30px" }} className="">
                PAPYRUS is an advertising agency for 19 years, located in
                Bangladesh, focusing on creating sustainable ideas and marketing
                communication solutions. Our approach is based on strategic
                insights, which help our clients stand out in a cluttered
                marketplace and improve brand identity, image, and preference.
                Starting our journey from 2007, we proudly showcase the feedback
                and experiences of our valued clients. As a trusted and
                innovative 360-degree marketing agency, we are dedicated to
                delivering exceptional results and exceeding expectations. Our
                diverse team of are young & experienced MARCOM professionals
                delivers globally-renowned expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
