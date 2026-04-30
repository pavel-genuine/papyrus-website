"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";
import VideOne from "@/components/video/video-one";
import BrandOne from "@/components/brand/brand-one";
import ServiceOne from "@/components/service/service-one";
import ProjectOne from "@/components/project/project-one";
import AwardOne from "@/components/award/award-one";
import TeamOne from "@/components/team/team-one";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import FooterOne from "@/layouts/footers/footer-one";

// images
import shape_1 from "@/assets/img/home-01/footer/footer-circle-shape-1.png";
import shape_2 from "@/assets/img/home-01/footer/footer-circle-shape-2.png";

// animation
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
import GalleryOne from "@/components/gallery/gallery-one";
import PortfolioMasonryArea from "@/components/portfolio/portfolio-masonry-area";
import ProjectFive from "@/components/project/project-five";
import PortfolioStandardMain from "../portfolio/portfolio-standard-main";
import CounterOne from "@/components/counter/counter-one";
import LineImgSlider from "@/components/line-text/line-img-slider";
import StudioPanelThree from "@/components/studio-panels/studio-panel-3";
import FooterFive from "@/layouts/footers/footer-five";
import FooterFour from "@/layouts/footers/footer-four";
import InstagramArea from "@/components/instagram/instagram-area";
import AwardTwo from "@/components/award/award-two";
import { awardAnimOne } from "@/utils/award-anim";

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
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();
      // portfolio image wrap
      gsap.timeline({
        scrollTrigger: {
          trigger: ".tp-project-full-img-wrap",
          start: "top 65",
          end: "bottom 0%",
          pin: ".tp-project-full-img",
          pinSpacing: false,
        },
      });
      // team marquee
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
      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioSliderHomeEleven />

            <AboutThree></AboutThree>

            <PortfolioStandardMain />

            {/* <PortfolioMasonryArea /> */}
            <CounterOne />

            <StudioPanelThree />

            {/* service area */}
            {/* <ServiceOne /> */}
            {/* service area */}

            {/* award area */}
            <AwardTwo />

            {/* <AwardOne /> */}
            {/* award area */}

            {/* testimonial area */}
            {/* <TestimonialOne /> */}
            {/* testimonial area */}
          </main>

          {/* footer area */}
          <FooterFive />
          <FooterFour />

          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeMain;
