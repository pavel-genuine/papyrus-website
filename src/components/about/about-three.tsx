import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import shape from "@/assets/img/home-02/service/sv-shape-1.png";
import { ArrowBg, RightArrowTwo, FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {
  return (
    <div className="tp-about-3-area pt-120 pb-110 ">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              {/* <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                  </span>
                <span className="tp-subtitle-text tp_text_invert">
                  Who we are
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span> */}
              <h5 className="tp-section-title-90 tp_fade_bottom mb-40 mt-60">
                Crafting Perceptions <br /> Empowering Brands
                <span>
                  {" "}
                  <br />
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div
          // style={{ textAlign: "justify" }}
          className="row align-items-center "
        >
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="tp-service-2-shape-img text-center text-lg-start">
              <Image src={shape} alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 tp_fade_bottom">
                PAPYRUS is an advertising agency for 19 years, located in
                Bangladesh, focusing on creating sustainable ideas and marketing
                communication solutions. Our approach is based on strategic
                insights, which help our clients stand out in a cluttered
                marketplace and improve brand identity, image, and preference.
              </p>
              <p className="mb-45 tp_fade_bottom">
                Starting our journey from 2007, we proudly showcase the feedback
                and experiences of our valued clients. As a trusted and
                innovative 360-degree marketing agency, we are dedicated to
                delivering exceptional results and exceeding expectations.
                <br />
                <br />
                Our diverse team of are young & experienced MARCOM professionals
                delivers globally-renowned expertise.
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about">
                Our Story
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
