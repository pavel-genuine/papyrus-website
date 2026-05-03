"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";
import port_1 from "@/assets/img/inner-project/showcase/showcase-1.jpg";
import port_2 from "@/assets/img/inner-project/showcase/showcase-2.jpg";
import port_3 from "@/assets/img/inner-project/showcase/showcase-3.jpg";
import port_4 from "@/assets/img/inner-project/showcase/showcase-4.jpg";

const servicesList = [
  {
    id: 1,
    title: "Logo Design",
    mainImg: sv_1,
    thumbnails: [sv_2, sv_3],
    desc: "Your logo is at the heart of your identity. An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience.",
    subDesc:
      "We focus on creating versatile vector assets that maintain their integrity across digital screens and physical merchandise, ensuring your brand mark is timeless.",
    features: [
      "Graphic research",
      "Logo presentation",
      "Redesign advice",
      "Professional formats",
    ],
  },
  {
    id: 2,
    title: "PR & Media Buying",
    mainImg: port_1,
    thumbnails: [port_2, sv_1],
    desc: "Strategic media procurement and public relations management to maximize your brand's reach and authority across top-tier publications.",
    subDesc:
      "By leveraging deep industry connections, we place your brand in the right conversations, ensuring your message reaches the most influential decision-makers.",
    features: [
      "Media Relations",
      "Press Releases",
      "Crisis Management",
      "Media Planning",
    ],
  },
  {
    id: 3,
    title: "LAUNCHING",
    mainImg: port_2,
    thumbnails: [port_3, port_4],
    desc: "Crafting memorable brand launches that create immediate market impact and long-term consumer interest through strategic event planning.",
    subDesc:
      "From teaser phases to the big reveal, we manage the entire lifecycle of your product debut to ensure maximum hype and measurable conversion.",
    features: [
      "Teaser Campaigns",
      "Launch Events",
      "Influencer Kits",
      "PR Coverage",
    ],
  },
  {
    id: 4,
    title: "ANNUAL REPORT",
    mainImg: port_3,
    thumbnails: [port_1, sv_2],
    desc: "Professional layout and data visualization for corporate reports that communicate success and transparency to stakeholders.",
    subDesc:
      "We transform complex financial data into engaging visual narratives that reflect your company's growth, values, and future vision.",
    features: [
      "Data Visualization",
      "Copywriting",
      "Financial Layouts",
      "Digital PDF sets",
    ],
  },
  {
    id: 5,
    title: "PACKAGING",
    mainImg: port_4,
    thumbnails: [sv_3, port_2],
    desc: "Functional and aesthetic packaging solutions that stand out on the shelf while protecting your product's unique brand identity.",
    subDesc:
      "Our designs balance structural integrity with visual appeal, focusing on the unboxing experience to drive repeat purchases and social sharing.",
    features: [
      "Die-cut Design",
      "Material Selection",
      "Eco-friendly options",
      "Prototyping",
    ],
  },
  {
    id: 6,
    title: "Digital & Social Media Marketing",
    mainImg: sv_1,
    thumbnails: [port_4, sv_2],
    desc: "Comprehensive management of your digital ecosystem, focusing on growth, engagement, and cross-platform community building.",
    subDesc:
      "We utilize data-driven insights to optimize your ad spend and content strategy, ensuring every post contributes to your bottom line.",
    features: ["Content Strategy", "Paid Ads", "Community Mgmt", "Analytics"],
  },
  {
    id: 7,
    title: "EVENT",
    mainImg: port_1,
    thumbnails: [sv_3, port_3],
    desc: "Managing large-scale corporate events and brand experiences with meticulous attention to detail and on-site logistics.",
    subDesc:
      "Whether it is a corporate seminar or a consumer pop-up, we handle the technical production so you can focus on your guests.",
    features: [
      "Venue Scouting",
      "Theme Design",
      "Vendor Mgmt",
      "On-site Coordination",
    ],
  },
  {
    id: 8,
    title: "CALENDAR",
    mainImg: sv_2,
    thumbnails: [port_2, sv_1],
    desc: "Customized corporate calendars that keep your brand in front of clients consistently every single day of the year.",
    subDesc:
      "We merge utility with high-end photography and design, creating a desktop staple that reinforces your brand presence daily.",
    features: [
      "Custom Layouts",
      "Thematic Imagery",
      "Premium Printing",
      "Distribution",
    ],
  },
  {
    id: 9,
    title: "BROCHURE & CATALOGUE",
    mainImg: port_3,
    thumbnails: [sv_2, port_1],
    desc: "Premium print materials designed to showcase your products and services with professional elegance and absolute clarity.",
    subDesc:
      "Our layouts prioritize readability and flow, guiding the reader through your offerings with a premium tactile experience.",
    features: [
      "Layout Design",
      "Product Photography",
      "Typography",
      "Paper Selection",
    ],
  },
  {
    id: 10,
    title: "TVC",
    mainImg: sv_1,
    thumbnails: [port_4, port_2],
    desc: "High-quality television commercial production that tells your brand story with cinematic impact and mass market appeal.",
    subDesc:
      "We manage the full production pipeline, from initial scriptwriting to post-production and color grading for broadcast standards.",
    features: [
      "Script Writing",
      "Storyboarding",
      "Production",
      "Color Grading",
    ],
  },
  {
    id: 11,
    title: "CAMPAIGN",
    mainImg: port_2,
    thumbnails: [sv_1, port_3],
    desc: "Integrated marketing campaigns designed to achieve specific business goals across all strategic media platforms.",
    subDesc:
      "We ensure a unified brand voice across ATL, BTL, and Digital channels to create a cohesive consumer journey.",
    features: ["Concept Dev", "Multi-channel setup", "Execution", "Reporting"],
  },
  {
    id: 12,
    title: "SOCIAL",
    mainImg: sv_3,
    thumbnails: [port_4, sv_2],
    desc: "Creating viral-worthy social content that builds genuine connection and long-lasting loyalty with your online followers.",
    subDesc:
      "Our focus is on short-form video and interactive storytelling that resonates with modern digital consumption habits.",
    features: [
      "Trend Hijacking",
      "Reels/TikToks",
      "Grid Aesthetic",
      "Bio Optimization",
    ],
  },
  {
    id: 13,
    title: "LEAFLET",
    mainImg: port_1,
    thumbnails: [sv_2, sv_1],
    desc: "Direct marketing materials that deliver your message straight to the hands of your target customers with impact.",
    subDesc:
      "We design high-conversion flyers that combine catchy headlines with clear calls to action for local marketing success.",
    features: [
      "A5/A4 Layouts",
      "Copywriting",
      "Distribution Maps",
      "Print Finishing",
    ],
  },
  {
    id: 14,
    title: "OVC",
    mainImg: port_4,
    thumbnails: [port_1, sv_3],
    desc: "Engaging online video content optimized for digital platforms, social media feeds, and high-performance mobile viewing.",
    subDesc:
      "Optimized for 'sound-off' viewing, our OVCs use compelling captions and fast-paced editing to capture attention in seconds.",
    features: [
      "Format Optimization",
      "Subtitles",
      "Fast-paced Editing",
      "Hook Creation",
    ],
  },
  {
    id: 15,
    title: "ACTIVATION",
    mainImg: sv_1,
    thumbnails: [port_3, port_2],
    desc: "Driving direct consumer engagement through high-energy brand activations and localized field marketing activities.",
    features: ["Sampling", "BTL Strategy", "Roadshows", "User Interaction"],
    subDesc:
      "We bridge the gap between digital awareness and physical experience, creating tangible moments that consumers remember.",
  },
  {
    id: 16,
    title: "MUSIC VIDEO",
    mainImg: port_2,
    thumbnails: [sv_1, sv_3],
    desc: "Creative visual production for artists, blending cinematic storytelling with rhythmic brand integration and artistry.",
    subDesc:
      "From conceptual art direction to VFX, we produce visuals that elevate the auditory experience and build artist identity.",
    features: ["Concept Art", "VFX", "Choreography Shots", "Lighting Setup"],
  },
  {
    id: 17,
    title: "BILL BOARD",
    mainImg: port_3,
    thumbnails: [port_4, sv_2],
    desc: "Large-scale outdoor visibility designed for maximum impact and instant brand recognition even from a distance.",
    subDesc:
      "We master the art of 3-second communication, ensuring your message is loud, clear, and unmissable on high-traffic routes.",
    features: [
      "Visibility Audit",
      "Minimalist Copy",
      "High-res Graphics",
      "Site Selection",
    ],
  },
  {
    id: 18,
    title: "AV",
    mainImg: sv_2,
    thumbnails: [port_1, sv_1],
    desc: "Professional Audio-Visual solutions for corporate presentations, documentaries, and immersive brand storytelling.",
    subDesc:
      "Using high-fidelity sound and sharp visuals, we create AV materials that command attention in boardrooms or public spaces.",
    features: ["Sound Design", "Voiceover", "Animation", "Editing"],
  },
  {
    id: 19,
    title: "STALL",
    mainImg: port_1,
    thumbnails: [sv_3, port_4],
    desc: "Custom exhibition stall designs that attract footfall and showcase your brand at major international trade fairs.",
    subDesc:
      "We create immersive environments that facilitate networking, using lighting and spatial design to draw in potential leads.",
    features: [
      "3D Visualization",
      "Fabrication",
      "Lighting",
      "Branding Elements",
    ],
  },
  {
    id: 20,
    title: "OUT DOOR BRANDING",
    mainImg: port_4,
    thumbnails: [sv_2, port_3],
    desc: "Comprehensive outdoor visibility solutions from architectural signage to full-scale environmental branding.",
    subDesc:
      "Our solutions cover everything from building wraps to retail fascias, ensuring consistent branding in the physical world.",
    features: [
      "Site Surveys",
      "Signage Design",
      "Installation",
      "Material Testing",
    ],
  },
  {
    id: 21,
    title: "PRESS AD",
    mainImg: sv_3,
    thumbnails: [port_2, sv_1],
    desc: "Traditional print advertising redesigned for modern impact in high-circulation newspapers and niche magazines.",
    subDesc:
      "We focus on striking visual metaphors and clever copy that cuts through the clutter of traditional print media.",
    features: [
      "Ad Layouts",
      "Copywriting",
      "Placement Strategy",
      "Response Tracking",
    ],
  },
  {
    id: 22,
    title: "AI WORKS",
    mainImg: port_2,
    thumbnails: [port_4, sv_1],
    desc: "Leveraging cutting-edge AI tools for innovative design, workflow automation, and futuristic creative production.",
    subDesc:
      "We integrate artificial intelligence to speed up asset creation and provide predictive design solutions for our clients.",
    features: [
      "AI Image Gen",
      "Task Automation",
      "Dynamic Content",
      "Predictive Design",
    ],
  },
  {
    id: 23,
    title: "BTL",
    mainImg: port_3,
    thumbnails: [sv_2, sv_3],
    desc: "Below-the-line marketing strategies focused on direct consumer interaction and point-of-sale conversion.",
    subDesc:
      "Our BTL strategies target specific consumer segments through direct mail, telemarketing, and in-store merchandising.",
    features: [
      "Point of Sale",
      "Direct Mail",
      "Retail Merchandising",
      "Trade Shows",
    ],
  },
  {
    id: 24,
    title: "ARM",
    mainImg: port_1,
    thumbnails: [port_2, sv_2],
    desc: "Advanced Relationship Management and strategic support to ensure long-term brand health and stakeholder loyalty.",
    subDesc:
      "We help you manage the lifecycle of your client relationships through data-driven loyalty programs and strategic communication.",
    features: [
      "Client Strategy",
      "Loyalty Programs",
      "Account Growth",
      "Insight Data",
    ],
  },
];

export default function SpherDetailsArea() {
  const [activeService, setActiveService] = useState(servicesList[0]);

  const handleTabClick = (e: any, item: any) => {
    e.preventDefault();
    setActiveService(item);
  };

  return (
    <div className="service-details__area service-details__space pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              {/* <span className="service-details__subtitle tp-char-animation">
                Design Studio
              </span> */}
              <h4 className="sv-hero-title tp-char-animation">
                Vast Canvas of Wandering 
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Main Feature Image */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb p-relative">
                <div>
                  <h3
                    style={{
                      position: "absolute",
                      top: "30px",
                      right: "50px",
                      zIndex: "20",
                      color: "white",
                      backgroundColor: "black",
                      paddingInline: "30px",
                      paddingBlock: "10px",
                      borderRadius: "50px",
                    }}
                    className=" "
                  >
                    {activeService.title}
                  </h3>
                </div>
                <Image
                  data-speed="0.4"
                  src={activeService.mainImg}
                  alt={activeService.title}
                  style={{ height: "90vh", width: "100vw", zIndex: "1" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fuild px-md-5">
        <div className="row">
          {/* Left Side Content */}
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">{activeService.subDesc}</p>
                {/* <p>{activeService.subDesc}</p> */}
              </div>

              {/* Dynamic Feature List */}
              <div className="service-details__fea-list">
                <ul>
                  {activeService.features?.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Thumbnails Gallery */}
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {activeService.thumbnails?.map((thumb, index) => (
                    <div
                      key={index}
                      className="col-xl-6 col-lg-6 col-md-6 mb-20"
                    >
                      <div className="service-details__sm-thumb">
                        <Image
                          src={thumb}
                          alt={`${activeService.title}-thumb-${index}`}
                          style={{ height: "auto", width: "100%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Sidebar (Dynamic Navigation) */}
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>List of Canvas Elems</span>
              </div>

              <div className="service-details__right-text-box mb-40">
                <h4>
                  {activeService.title.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      {word} <br />
                    </React.Fragment>
                  ))}
                </h4>
                <p className="">{activeService.desc}</p>
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

              <Link
                className="tp-btn-white background-black mt-20"
                href="/lets-connect"
              >
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
