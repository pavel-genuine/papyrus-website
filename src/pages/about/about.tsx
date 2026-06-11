"use client";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import AboutMeHero from "@/components/about/about-me-hero";
import AboutMeArea from "@/components/about/about-me-area";
import AboutPortfolio from "@/components/portfolio/about-portfolio";
import AboutWork from "@/components/work/about-work";
import { BrandItems } from "@/components/brand/brand-two";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import FooterFour from "@/layouts/footers/footer-four";
import HeaderOne from "@/layouts/headers/header-one";
import { instagramAnim } from "@/utils/instagram-anim";
import PapyrusTeam from "../team/papyrus-team";
import PortfolioGridFourColArea from "@/components/portfolio/portfolio-grid-4-col-area";
import portfolio_data from "@/data/portfolio-data";

const ARMData = Array.from({ length: 29 }, (_, index) => ({
  id: index + 101,
  mediaType: "image",
  src: `/assets/img/home-01/papyrus-about/ARM/img (${index + 1}).jpg`,
}));
const socialData = Array.from({ length: 14 }, (_, index) => ({
  id: index + 101,
  mediaType: "image",
  src: `/assets/img/home-01/papyrus-about/Social/img (${index + 1}).jpg`,
}));

const AboutMeMain = () => {
  useScrollSmooth();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      teamMarqueAnim();
      fadeAnimation();
      hoverBtn();
      instagramAnim();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* about hero */}
            <AboutMeHero />
            {/* about hero */}
            <div className="tp-brand-4-area bg-black">
              <div className="tm-hero-area tm-hero pt-100">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <h4
                          style={{
                            fontSize: width > 768 ? "90px" : "80px",
                            fontWeight: width > 768 ? "" : "200",
                          }}
                          className="tm-hero-title tp-char-animation"
                        >
                          Papyrus Team
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PapyrusTeam />

            {/* brand arm */}
            <div className="tp-brand-4-area pt-0 pb-60">
              <div className="tm-hero-area pt-100">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <h4
                          style={{
                            fontSize: width > 768 ? "90px" : "80px",
                            fontWeight: width > 768 ? "" : "200",
                          }}
                          className="tm-hero-title fs-120 tp-char-animation "
                        >
                          Papyrus ARM
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-brand-4-area pt-20 pb-120">
              <PortfolioGridFourColArea portfolio_data={ARMData} />
            </div>
            {/* brand social */}
            <div className="tp-brand-4-area pt-0 pb-60 bg-black">
              <div className="tm-hero-area pt-100">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <h4
                          style={{
                            fontSize: width > 768 ? "90px" : "80px",
                            fontWeight: width > 768 ? "" : "200",
                          }}
                          className="tm-hero-title fs-120 tp-char-animation "
                        >
                          Papyrus Social
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-brand-4-area pt-20 pb-120 bg-black">
              <PortfolioGridFourColArea portfolio_data={socialData} />
            </div>
            {/* brand bts */}
            <div className="tp-brand-4-area pt-0 pb-60">
              <div className="tm-hero-area pt-100">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <h4
                          style={{
                            fontSize: width > 768 ? "90px" : "80px",
                            fontWeight: width > 768 ? "" : "200",
                          }}
                          className="tm-hero-title fs-120 tp-char-animation "
                        >
                          Papyrus BTS
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-brand-4-area pt-20 pb-120">
              <p className="text-center text-white"> Up Comming....</p>
              {/* <PortfolioGridFourColArea portfolio_data={portfolio_data} /> */}
            </div>

            {/* big text */}
            <BigText cls="char-wrapper" />
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

export default AboutMeMain;
