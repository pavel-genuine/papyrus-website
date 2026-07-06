"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import useScrollSmooth from "@/hooks/use-scroll-smooth";

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";
import BrandOne from "@/components/brand/brand-one";
import ServiceOne from "@/components/service/service-one";
import ProjectOne from "@/components/project/project-one";
import AwardOne from "@/components/award/award-one";
import TeamOne from "@/components/team/team-one";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import FooterOne from "@/layouts/footers/footer-one";
import shape_1 from "@/assets/img/home-01/footer/footer-circle-shape-1.png";
import shape_2 from "@/assets/img/home-01/footer/footer-circle-shape-2.png";
import { videoAnimOne } from "@/utils/video-anim";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { footerTwoAnimation } from "@/utils/footer-anim";
import {
  bounceAnimation,
  charAnimation,
  fadeAnimation,
} from "@/utils/title-animation";
import PortfolioSliderHomeEleven from "@/components/portfolio/slider/portfolio-slider-home-eleven";
import AboutThree from "@/components/about/about-three";
import PortfolioStandardMain from "../portfolio/portfolio-home-papyrus";
import CounterOne from "@/components/counter/counter-one";
import LineImgSlider from "@/components/line-text/line-img-slider";
import StudioPanelThree from "@/components/studio-panels/studio-panel-3";
import FooterFive from "@/layouts/footers/footer-five";
import FooterFour from "@/layouts/footers/footer-four";
import AwardTwo from "@/components/award/award-two";
import { awardAnimOne } from "@/utils/award-anim";
import PortfolioHome from "../portfolio/portfolio-home-papyrus";
import ServiceHome from "@/components/service/service-home-papyrus";

const HomeMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    // Dynamically import plugins only on client side
    const initPlugins = async () => {
      const { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } =
        await import("@/plugins");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

      if (document.querySelector(".tp-magic-cursor")) {
        cursorAnimation();
      }
    };
    initPlugins();
  }, []);

  useGSAP(() => {
    const initGSAP = async () => {
      const { ScrollSmoother, ScrollTrigger, SplitText } =
        await import("@/plugins");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

      const timer = setTimeout(() => {
        videoAnimOne();
        gsap.timeline({
          scrollTrigger: {
            trigger: ".tp-project-full-img-wrap",
            start: "top 65",
            end: "bottom 0%",
            pin: ".tp-project-full-img",
            pinSpacing: false,
          },
        });
        teamMarqueAnim();
        hoverBtn();
        footerTwoAnimation();
        fadeAnimation();
        charAnimation();
        bounceAnimation();
        awardAnimOne();
      }, 100);

      return () => clearTimeout(timer);
    };

    initGSAP();
  });

  return (
    <Wrapper>
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>

      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioSliderHomeEleven />
            <AboutThree />
            <PortfolioHome></PortfolioHome>
            <ServiceHome></ServiceHome>
            {/* <PortfolioStandardMain /> */}
            <CounterOne />
            {/* <StudioPanelThree /> */}
            {/* <AwardTwo /> */}
          </main>
          {/* <FooterFive /> */}
          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeMain;
