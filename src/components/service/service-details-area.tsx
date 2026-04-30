"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

const servicesList = [
  {
    id: 1,
    title: "Logo Design",
    desc: "Your logo is at the heart of your identity. An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience.",
  },
  {
    id: 2,
    title: "PR & Media Buying",
    desc: "Strategic media procurement and public relations management to maximize your brand's reach and authority.",
  },
  {
    id: 3,
    title: "LAUNCHING",
    desc: "Crafting memorable brand launches that create immediate market impact and long-term consumer interest.",
  },
  {
    id: 4,
    title: "ANNUAL REPORT",
    desc: "Professional layout and data visualization for corporate reports that communicate success and transparency.",
  },
  {
    id: 5,
    title: "PACKAGING",
    desc: "Functional and aesthetic packaging solutions that stand out on the shelf while protecting your product identity.",
  },
  {
    id: 6,
    title: "Digital & Social Media Marketing",
    desc: "Comprehensive management of your digital ecosystem, focusing on growth, engagement, and community building.",
  },
  {
    id: 7,
    title: "EVENT",
    desc: "Managing large-scale corporate events and brand experiences with meticulous attention to detail and logistics.",
  },
  {
    id: 8,
    title: "CALENDAR",
    desc: "Customized corporate calendars that keep your brand in front of clients consistently throughout the year.",
  },
  {
    id: 9,
    title: "BROCHURE & CATALOGUE",
    desc: "Premium print materials designed to showcase your products and services with elegance and clarity.",
  },
  {
    id: 10,
    title: "TVC",
    desc: "High-quality television commercial production that tells your brand story with cinematic impact.",
  },
  {
    id: 11,
    title: "CAMPAIGN",
    desc: "Integrated marketing campaigns designed to achieve specific business goals across all strategic platforms.",
  },
  {
    id: 12,
    title: "SOCIAL",
    desc: "Creating viral-worthy social content that builds genuine connection and loyalty with your followers.",
  },
  {
    id: 13,
    title: "LEAFLET",
    desc: "Direct marketing materials that deliver your message straight to the hands of your target customers.",
  },
  {
    id: 14,
    title: "OVC",
    desc: "Engaging online video content optimized for digital platforms, social media feeds, and mobile viewing.",
  },
  {
    id: 15,
    title: "ACTIVATION",
    desc: "Driving direct consumer engagement through high-energy brand activations and field marketing.",
  },
  {
    id: 16,
    title: "MUSIC VIDEO",
    desc: "Creative visual production for artists, blending cinematic storytelling with rhythmic brand integration.",
  },
  {
    id: 17,
    title: "BILL BOARD",
    desc: "Large-scale outdoor visibility designed for maximum impact and instant brand recognition on the move.",
  },
  {
    id: 18,
    title: "AV",
    desc: "Professional Audio-Visual solutions for corporate presentations, documentaries, and brand storytelling.",
  },
  {
    id: 19,
    title: "STALL",
    desc: "Custom exhibition stall designs that attract footfall and showcase your brand at international trade fairs.",
  },
  {
    id: 20,
    title: "OUT DOOR BRANDING",
    desc: "Comprehensive outdoor visibility solutions from architectural signage to environmental branding.",
  },
  {
    id: 21,
    title: "PRESS AD",
    desc: "Traditional print advertising redesigned for modern impact in high-circulation newspapers and magazines.",
  },
  {
    id: 22,
    title: "AI WORKS",
    desc: "Leveraging cutting-edge AI tools for innovative design, automation, and futuristic creative production.",
  },
  {
    id: 23,
    title: "BTL",
    desc: "Below-the-line marketing strategies focused on direct consumer interaction and point-of-sale conversion.",
  },
  {
    id: 24,
    title: "ARM",
    desc: "Advanced Relationship Management and strategic support to ensure long-term brand health and loyalty.",
  },
];

export default function ServiceDetailsArea() {
  const [activeService, setActiveService] = useState(servicesList[0]);

  const handleTabClick = (e: any, item: any) => {
    e.preventDefault(); // Prevents page jump
    setActiveService(item);
  };

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                Design Studio
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                Vast Canvas of Wandering
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={sv_1}
                  alt="service-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Side Content */}
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">{activeService.desc}</p>
                <p>
                  Great user experience design lets users focus on the task they
                  have to complete and evokes emotion without distracting them.
                </p>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_2}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_3}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Sidebar (Dynamic Tabs) */}
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>List of Canvas Elem</span>
              </div>

              <div className="service-details__right-category">
                {servicesList.map((item) => (
                  <a
                    key={item.id}
                    href="#"
                    onClick={(e) => handleTabClick(e, item)}
                    className={activeService.id === item.id ? "active" : ""}
                  >
                    {item.title}
                  </a>
                ))}
              </div>

              <div className="service-details__right-text-box">
                <h4>
                  {activeService.title.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      {word} <br />
                    </React.Fragment>
                  ))}
                </h4>
                <p className="mb-20">{activeService.desc}</p>
                <Link
                  className="tp-btn-white background-black"
                  href="/lets-connect"
                >
                  Let’s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
