"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/inner-service/hero/hero-2.png";
import ser_hero_shape from "@/assets/img/inner-service/hero/hero-shape-1.jpg";

export default function ServiceHero() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-11">
            <div className="sv-hero-title-box">
              <h6>
                <span
                  style={{ fontSize: width > 768 ? "75px" : "45px" }}
                  className="sv-hero-title tp-char-animation "
                >
                  We are all about adaptable approaches,{" "}
                </span>
                <span
                  style={{ fontSize: width > 768 ? "75px" : "45px" }}
                  className="sv-hero-title tp-char-animation "
                >
                  implementing creative thinking, and driving long-lasting{" "}
                </span>
                <span
                  style={{ fontSize: width > 768 ? "75px" : "45px" }}
                  className="sv-hero-title tp-char-animation "
                >
                  effective strategies that ensure a brand’s success.
                </span>
              </h6>
              {/* <p className="tp_fade_bottom">
                We provide powerful marketing services .
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{ height: "auto", width: "100vw" }}
                />
              </div>
              {/* <Image
                className="sv-hero-thumb-shape d-none d-lg-block"
                src={ser_hero_shape}
                alt="ser_hero-shape"
                style={{ height: "auto" }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
