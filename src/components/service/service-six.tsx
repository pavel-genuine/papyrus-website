"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import shape from "@/assets/img/inner-about/about/shape-1.png";

import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";
import { createPortal } from "react-dom";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Sketching the brand roadmap",
    title: "Strategic Planning",
    desc: "Sketching the brand roadmap. At Papyrus, our strategic planning services are designed to optimize your brand's online presence and drive results through in-depth research and data-driven insights.",
    text: "At Papyrus, our strategic planning services are designed to optimize your brand's online presence and drive results. By conducting in-depth research and leveraging data-driven insights, we craft customized marketing strategies that align with your business goals and target audience. Our team of experts focuses on keyword analysis, competitor benchmarking, and content optimization to ensure maximum search engine visibility. Through continuous monitoring and performance analysis, we adapt our approach to stay ahead of the evolving digital landscape, ultimately boosting your brand's reach, engagement, and conversions. Trust Papyrus for strategic planning that delivers tangible results and elevates your brand's success.",
    why_we: "We deliver tailored strategic planning for marketing success.",
    expert: "Our skilled team creates innovative marketing strategies.",
    extra_info:
      "We serve the best planning. At Papyrus, we pride ourselves on delivering the best planning services, meticulously crafting marketing strategies tailored to your brand's unique needs and objectives.",
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Developing effective communication",
    title: "Communication Planning",
    desc: "Developing effective communication. We offer customized communication planning services utilizing a data-driven approach to build strong relationships and enhance brand reputations.",
    text: "At Papyrus, we offer customized communication planning services to businesses, utilizing a data-driven approach to deliver tangible results. Our team of experts works closely with clients to understand their unique needs, develop tailored communication plans, and determine the most effective communication channels to reach their target audience. With a focus on building strong relationships and enhancing reputations, we empower clients to communicate effectively and achieve their communication goals.",
    why_we: "We're experts in tailored communication planning services.",
    support: "Exceptional support throughout the planning process.",
    extra_info:
      "We offer top-notch services. We focus on providing exceptional quality communication planning services to empower clients to communicate effectively and achieve their goals.",
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Crafting and promoting ideas",
    title: "Advertising",
    desc: "Crafting and promoting ideas. Papyrus offers a 360-advertising service encompassing print, TV, digital, and social media to help clients effectively reach their target audience.",
    text: "Papyrus offers a 360-advertising service that encompasses various advertising channels, including print, TV, digital, and social media. Our team of experts utilizes a data-driven approach to develop advertising strategies that are tailored to our client's needs and deliver measurable results. With a focus on achieving advertising objectives, we empower clients to effectively reach their target audience and enhance their brand reputation.",
    why_we: "We are experts in 360 advertising services.",
    support: "Effective advertising support is provided.",
    extra_info:
      "Our coverage areas Papyrus offers comprehensive advertising services across various media channels, including printing media, social media, GDN, LDN, TV programs, drama, and event sponsorship.",
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Creating Preference",
    title: "Creative Designs",
    desc: "Creating Preference. Our team of designers uses a collaborative approach to develop tailored designs that effectively communicate your message and enhance brand identity.",
    text: "At Papyrus we offer creative design services that help our clients stand out in their respective industries. Our team of designers uses a collaborative approach to understand our client's unique needs and preferences, developing tailored designs that effectively communicate their message to their target audience. With a focus on delivering exceptional results, we empower clients to enhance their brand identity and achieve their creative objectives.",
    why_we: "We tailor design solutions for your success.",
    support: "Outstanding design support at all times",
    extra_info:
      "Imagination gets true. Our creative design services bring imagination to life, creating unique and impactful designs that effectively communicate our client's messages to their target audience.",
  },
  {
    id: 5,
    img: ser_img_1,
    subtitle: "Producing mind blotting Creatives",
    title: "Audio Visual & Print Production",
    desc: "Producing mind blotting Creatives. We utilize state-of-the-art technology to produce high-quality video advertisements and top-notch print materials like brochures and billboards.",
    text: "At Papyrus we offer audio-visual and print production services that help our clients effectively showcase their brand identity. Our team of experts utilizes state-of-the-art technology and equipment to produce high-quality audio-visual content, including video advertisements and commercials. Additionally, we provide top-notch print production services, such as brochures, flyers, and billboards, using high-quality materials to ensure a lasting impact. With a focus on delivering exceptional results, we empower clients to effectively communicate their message to their target audience through visually stunning content.",
    why_we: "High-quality production solutions for your success.",
    support: "We tailor production solutions for your success.",
    extra_info:
      "We serve the best work. From captivating videos to stunning print materials, our team delivers high-quality and engaging content that captivates audiences and elevates brands.",
  },
  {
    id: 6,
    img: ser_img_2,
    subtitle: "Bringing brands to life",
    title: "PR & Media planning and Buying",
    desc: "Bringing brands to life. We craft compelling narratives and leverage strong relationships with leading media outlets to negotiate favorable rates and maximize brand visibility.",
    text: "At Papyrus we offer PR and media buying services to help our clients effectively reach their target audience. Our team of experts works closely with clients to craft compelling narratives that resonate with their audience and develop comprehensive media strategies that maximize visibility. Additionally, we have established strong relationships with leading media outlets, enabling us to negotiate favorable rates for our clients. With a focus on delivering results, we empower clients to effectively communicate their message and achieve their business objectives through our PR and media buying services.",
    why_we:
      "We build effective communication strategies for your business's success.",
    support: "Comprehensive support to ensure your success in communication.",
    extra_info:
      "Established strong relationships with leading media outlets. We leverage our established partnerships with leading media outlets to ensure optimal placements for our clients, delivering impactful results through traditional and digital channels.",
  },
  {
    id: 7,
    img: ser_img_3,
    subtitle: "Creating the brand experience",
    title: "Activation",
    desc: "Creating the brand experience. Our activation services focus on creating immersive and memorable brand interactions that resonate with your target audience.",
    text: "Our activation services focus on creating immersive and memorable brand interactions that resonate with your target audience. We drive direct consumer engagement through brand activations, field marketing, and high-energy promotional events.",
    why_we: "Creating high-energy brand experiences.",
    support: "Expert field marketing and activation support.",
    extra_info:
      "Creating the brand experience. Our activation services focus on creating immersive and memorable brand interactions that resonate with your target audience.",
  },
  {
    id: 8,
    img: ser_img_4,
    subtitle: "Driven innovative experiences",
    title: "Event",
    desc: "Driven innovative experiences. We design and execute innovative event experiences that bring your brand to the forefront and engage audiences in real-time.",
    text: "We design and execute innovative event experiences that bring your brand to the forefront and engage audiences in real-time. Full-scale event management specializing in corporate gatherings, launches, and large-format brand experiences.",
    why_we: "Driven innovative experiences that captivate.",
    support: "Full-scale logistics and planning support.",
    extra_info:
      "We design and execute innovative event experiences that bring your brand to the forefront and engage audiences in real-time.",
  },
  {
    id: 9,
    img: ser_img_1,
    subtitle: "Driving Online Success Together",
    title: "Digital & Social Media Marketing",
    desc: "Driving Online Success Together. We specialize in customized digital strategies, including social media management and content creation, to help you build an engaging online presence.",
    text: "At Papyrus we provide digital and social media marketing services to help businesses grow and reach their target audience. We specialize in creating customized digital marketing strategies that include social media management, GDN, LDN advertising, and content creation. Our team of experts uses cutting-edge tools and techniques to deliver measurable results that help our clients stay ahead of the competition. Trust us to help you build an engaging online presence and connect with your customers like never before.",
    why_we: "We maximize online brand visibility and engagement.",
    support: "Expert assistance for successful online marketing campaigns.",
    extra_info:
      "Leverage the latest digital marketing tools. Our digital and social media marketing service helps businesses achieve their goals by utilizing the most cutting-edge tools and techniques to reach and engage their target audience.",
  },
];

function DescTooltip({
  desc,
  anchorEl,
  visible,
  onMouseEnter,
  onMouseLeave,
}: {
  desc: string;
  anchorEl: HTMLElement | null;
  visible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (anchorEl && visible) {
      const rect = anchorEl.getBoundingClientRect();
      setPos({
        top: rect.bottom + window.scrollY - 15,
        left: rect.left + window.scrollX + 150,
      });
    }
  }, [visible, anchorEl]);

  if (!mounted) return null;

  return createPortal(
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left,
        zIndex: 99999,
        maxWidth: "350px",
        background: "#1a1a1a",
        border: "1px solid #2e2e2e",
        borderRadius: "6px",
        padding: "20px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transform: visible ? "translateY(0px)" : "translateY(-6px)",
        transition:
          "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease",
        pointerEvents: visible ? "auto" : "none",
        color: "#cccccc",
        fontSize: "18px",
        lineHeight: "1.6",
      }}
    >
      {desc}
    </div>,
    document.body,
  );
}

export default function ServiceSix() {
  // ✅ Read ?service=id from URL on mount
  const searchParams = useSearchParams();

  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const titleRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ✅ Set activeId from query param when page loads
  useEffect(() => {
    const param = searchParams?.get("service");
    if (param) {
      const id = parseInt(param, 10);
      if (!isNaN(id)) setActiveId(id);
    }
  }, [searchParams]);

  const handleEnter = (id: number) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHoveredId(id);
  };

  const handleLeave = () => {
    leaveTimer.current = setTimeout(() => setHoveredId(null), 120);
  };

  // ✅ Which services to show in the detail section
  const visibleServices = activeId
    ? service_data.filter((s) => s.id === activeId)
    : service_data;

  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="ab-about-area ab-about-mt pt-60 pb-90 z-index-5">
        <div className="container container-1480">
          <div id="about-info" className="row">
            <div className="col-xxl-12">
              <div className="ab-about-content p-relative">
                <p className="tp_fade_bottom">
                  We are a creative studio that specializes in providing
                  high-quality design and branding solutions to businesses and
                  individuals. Our team is composed of talented designers,
                  developers, and marketers.!
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-9">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 mb-40">
                  <div className="ab-about-category-title-box p-relative">
                    <h4 className="ab-about-category-title"></h4>
                    <Image
                      className="ab-about-shape-1 d-none d-md-block"
                      src={shape}
                      alt="shape"
                    />
                  </div>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="row">
                    {/* Left list: services 1–5 */}
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                      <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                        <ul>
                          {service_data.slice(0, 5).map((ser) => (
                            <div key={ser.id}>
                              {/* ✅ Toggle activeId on click */}
                              <button
                                ref={(el: any) =>
                                  (titleRefs.current[ser.id] = el)
                                }
                                className={`accordion-buttons ${activeId === ser.id ? "" : "collapsed"}`}
                                type="button"
                                onClick={() =>
                                  setActiveId((prev) =>
                                    prev === ser.id ? null : ser.id,
                                  )
                                }
                                onMouseEnter={() => handleEnter(ser.id)}
                                onMouseLeave={handleLeave}
                              >
                                <li
                                  style={{
                                    fontSize: "25px",
                                    textAlign: "left",
                                  }}
                                >
                                  {ser.title}
                                </li>
                              </button>
                              <DescTooltip
                                desc={ser.desc}
                                anchorEl={titleRefs.current[ser.id] ?? null}
                                visible={hoveredId === ser.id}
                                onMouseEnter={() => handleEnter(ser.id)}
                                onMouseLeave={handleLeave}
                              />
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right list: services 6–9 */}
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                      <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                        <ul>
                          {service_data.slice(5, 9).map((ser) => (
                            <div key={ser.id}>
                              {/* ✅ Toggle activeId on click */}

                              <button
                                ref={(el: any) =>
                                  (titleRefs.current[ser.id] = el)
                                }
                                className={`accordion-buttons ${activeId === ser.id ? "" : "collapsed"}`}
                                type="button"
                                onClick={() =>
                                  setActiveId((prev) =>
                                    prev === ser.id ? null : ser.id,
                                  )
                                }
                                onMouseEnter={() => handleEnter(ser.id)}
                                onMouseLeave={handleLeave}
                              >
                                <li
                                  style={{
                                    fontSize: "25px",
                                    textAlign: "left",
                                  }}
                                >
                                  {ser.title}
                                </li>
                              </button>
                              <DescTooltip
                                desc={ser.desc}
                                anchorEl={titleRefs.current[ser.id] ?? null}
                                visible={hoveredId === ser.id}
                                onMouseEnter={() => handleEnter(ser.id)}
                                onMouseLeave={handleLeave}
                              />
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ "All Areas Details" resets to show everything */}
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8"></div>
          <Link
            href={""}
            className="col-xl-2 col-lg-2 col-md-2 tp-btn-project-sm"
            onClick={() => setActiveId(null)}
            // style={{ cursor: "pointer", background: "none", border: "none" }}
          >
            All Areas details
          </Link>
        </div>
      </div>

      {/* ✅ Details section — only shows filtered or all */}
      <div className="container-fluid p-0">
        {visibleServices.map((item) => (
          <div
            key={item.id}
            id={`service-${item.id}`}
            className={`sv-service-item project-panel-2 ${item.id % 2 === 0 ? "bg-dark" : "black-bg"}`}
          >
            <div className="row g-0">
              <div className="col-xl-12 col-lg-12">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                        <p style={{ marginBottom: "0px", fontWeight: "bold" }}>
                          Why We?
                        </p>
                        <p>{item.why_we}</p>
                        {item.expert && (
                          <div>
                            <p
                              style={{
                                marginBottom: "0px",
                                fontWeight: "bold",
                              }}
                            >
                              Expert Team
                            </p>
                            <p>{item.expert}</p>
                          </div>
                        )}
                        {item.support && (
                          <div>
                            <p
                              style={{
                                marginBottom: "0px",
                                fontWeight: "bold",
                              }}
                            >
                              Support
                            </p>
                            <p>{item.support}</p>
                          </div>
                        )}
                        <div>
                          <p>{item.extra_info}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
