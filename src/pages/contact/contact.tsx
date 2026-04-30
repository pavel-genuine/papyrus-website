"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ContactTwo from "@/components/contact/contact-two";
// import ContactLocation from "@/components/contact/contact-location";
// import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation } from "@/utils/title-animation";
import FooterFour from "@/layouts/footers/footer-four";

const ContactMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* hero area start */}
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Liko Studio</span>
                        <h4 className="tm-hero-title-big tp-char-animation">
                          Get in touch
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hero area end */}

              {/* contact area */}
              <ContactTwo />
              {/* contact area */}

              {/* contact area */}
              <div className="cn-contactform-area cn-contactform-style p-relative ">
                <div className="container container-1840 ">
                  <div className="cn-contactform-2-bg black-bg">
                    <div className="row">
                      <div className="">
                        <div
                          style={{ height: "80vh" }}
                          className="cn-contactform-2-map "
                        >
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d37866.42024631252!2d90.04636289871837!3d23.823039160865342!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1699251079678!5m2!1sen!2sbd"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* contact area */}

              {/* about area start */}
              <div className="cn-contactform-support-area pb-120 pt-100 bg-light ">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-10">
                      <div
                        className="cn-contactform-support-bg d-flex align-items-center justify-content-center"
                        style={{
                          backgroundImage:
                            "url(/assets/img/inner-contact/contact/contact-bg.png)",
                        }}
                      >
                        <div
                          style={{ color: "black" }}
                          className="cn-contactform-support-text text-center"
                        >
                          <span>
                            you can contact our location directly below. Or, We
                            aim to respond within 24 hours.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* about area end */}
            </main>

            {/* footer area */}
            <FooterFour />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactMain;
