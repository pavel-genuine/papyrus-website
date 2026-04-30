"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import PortfolioSliderHomeEleven from "@/components/portfolio/slider/portfolio-slider-home-eleven";
import AboutThree from "@/components/about/about-three";
import PortfolioStandardMain from "../portfolio/portfolio-standard-main";
import CounterOne from "@/components/counter/counter-one";
import StudioPanelThree from "@/components/studio-panels/studio-panel-3";
import FooterFive from "@/layouts/footers/footer-five";
import FooterFour from "@/layouts/footers/footer-four";
import AwardTwo from "@/components/award/award-two";

// animation utils
import { videoAnimOne } from "@/utils/video-anim";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { footerTwoAnimation } from "@/utils/footer-anim";
import {
  bounceAnimation,
  charAnimation,
  fadeAnimation,
} from "@/utils/title-animation";
import { awardAnimOne } from "@/utils/award-anim";

// Register plugins only on client
if (typeof window !== "undefined") {
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother);
  if (SplitText) gsap.registerPlugin(SplitText);
  if (useGSAP) gsap.registerPlugin(useGSAP);
}

const HomeMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      cursorAnimation &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();

      if (ScrollTrigger) {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".tp-project-full-img-wrap",
            start: "top 65",
            end: "bottom 0%",
            pin: ".tp-project-full-img",
            pinSpacing: false,
          },
        });
      }

      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
      awardAnimOne();
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* magic cursor */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>

      {/* header */}
      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioSliderHomeEleven />
            <AboutThree />
            <PortfolioStandardMain />
            <CounterOne />
            <StudioPanelThree />
            <AwardTwo />
          </main>

          <FooterFive />
          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeMain;
