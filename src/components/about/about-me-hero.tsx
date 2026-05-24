import React, { useEffect, useState } from "react";
import Image from "next/image";
import Social from "../social/social";
import { Leaf } from "../svg";

// images
import shape_1 from "@/assets/img/inner-about/hero/hero-2-shape-1.jpg";
import shape_2 from "@/assets/img/inner-about/hero/hero-2-shape-2.jpg";
import hero_img from "@/assets/img/menu/shop-menu/banner-1.jpg";
import Link from "next/link";

export default function AboutMeHero() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <div
      style={{
        marginBottom: width > 768 ? "150px" : "0px",
        paddingBottom: "0px",
      }}
      className="ab-2-hero-area ab-2-hero-ptb  p-relative"
    >
      <div className="ab-2-hero-social-wrap d-none d-lg-block">
        <div className="ab-2-hero-social">
          <Social />
        </div>
        <div className="ab-2-hero-social-text">
          <span>Follow us</span>
        </div>
      </div>
      <div className="container">
        <div className="ab-2-hero-main">
          <div className="row">
            <div className="col-xl-10">
              <div className="ab-2-hero-title-box p-relative">
                <h6
                  style={{
                    fontSize: width > 768 ? "100px" : "80px",
                    fontWeight: width > 768 ? "" : "200",
                  }}
                  className="ab-2-hero-title tp-char-animation"
                  // data-stagger="0.05"
                  data-on-scroll="0"
                  data-delay="0.6"
                >
                  Crafting Perceptions
                </h6>
                <h6
                  style={{
                    fontSize: width > 768 ? "100px" : "80px",
                    fontWeight: width > 768 ? "" : "200",
                  }}
                  className="ab-2-hero-title tp-char-animation"
                  // data-stagger="0.05"
                  data-on-scroll="0"
                  data-delay="0.6"
                >
                  Empowering Brands
                </h6>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xl-10 offset-xl-2">
              <div className="ab-2-hero-thumb-wrap p-relative">
                <Image
                  src={hero_img}
                  alt="shape"
                  data-speed="0.9"
                  style={{ height: "auto" }}
                />
                <h6
                  style={{ fontSize: "100px" }}
                  className="ab-2-hero-title tp-char-animation"
                  // data-stagger="0.05"
                  data-on-scroll="0"
                  data-delay="0.6"
                >
                  Empowering Brands
                </h6>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
