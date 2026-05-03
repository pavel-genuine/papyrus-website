"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import SpherDetailsArea from "@/components/service/sphere-details-area";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import HeaderOne from "@/layouts/headers/header-one";
import FooterFour from "@/layouts/footers/footer-four";
import Image from "next/image";
import logo from "@/assets/img/logo/gensoft.93966695b21e1b6a2f91.png";

const SphereMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      {/* <HeaderOne /> */}
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb p-relative">
                <Image height={100} width={100} src={logo.src}></Image>{" "}
                <div>
                  <h3
                    style={{
                      color: "white",
                    }}
                    className=" "
                  >
                    GenSoft
                  </h3>
                  <h5
                    style={{
                      color: "white",
                    }}
                  >
                    Digitals
                  </h5>
                </div>
              </div>
            </div>

            {/* service details area */}
            <SpherDetailsArea />
            {/* service details area */}
            {/* line image slider  */}
            {/* <LineImgSlider /> */}
            {/* line image slider  */}
            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default SphereMain;
