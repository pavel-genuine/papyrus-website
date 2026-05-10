"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import Link from "next/link";
import Image from "next/image";

import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about-1.jpg";
import ab_2 from "@/assets/img/inner-about/about/about-3.jpg";
import ab_3 from "@/assets/img/inner-about/about/about-2.jpg";

// internal imports
import star_icon from "@/assets/img/home-04/service/sv-star-1.png";
import sv_1 from "@/assets/img/home-04/service/sv-icon-1.png";
import sv_2 from "@/assets/img/home-04/service/sv-icon-2.png";
import sv_3 from "@/assets/img/home-04/service/sv-icon-3.png";
import sv_4 from "@/assets/img/home-04/service/sv-icon-4.png";
import { Autoplay } from "swiper/modules";
import { createPortal } from "react-dom";

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 4,
  loop: true,
  autoplay: true,
  spaceBetween: 60,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 4,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "576": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "0": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  modules: [Autoplay],
};
// service data
const service_data = [
  {
    id: 1,
    icon: sv_1,
    title: "Strategic Planning",
    subtitle: "01",
    desc: "Sketching the brand roadmap. At Papyrus, our strategic planning services are designed to optimize your brand's online presence and drive results through in-depth research and data-driven insights.",
  },
  {
    id: 2,
    icon: sv_2,
    title: "Communication Planning",
    subtitle: "02",
    desc: "Developing effective communication. We offer customized communication planning services utilizing a data-driven approach to build strong relationships and enhance brand reputations.",
  },
  {
    id: 3,
    icon: sv_3,
    title: "Advertising",
    subtitle: "03",
    desc: "Crafting and promoting ideas. Papyrus offers a 360-advertising service encompassing print, TV, digital, and social media to help clients effectively reach their target audience.",
  },
  {
    id: 4,
    icon: sv_4,
    title: "Creative Designs",
    subtitle: "04",
    desc: "Creating Preference. Our team of designers uses a collaborative approach to develop tailored designs that effectively communicate your message and enhance brand identity.",
  },
  {
    id: 5,
    icon: sv_1,
    title: "Audio Visual & Print Production",
    subtitle: "05",
    desc: "Producing mind blotting Creatives. We utilize state-of-the-art technology to produce high-quality video advertisements and top-notch print materials like brochures and billboards.",
  },
  {
    id: 6,
    icon: sv_2,
    title: "PR & Media planning and Buying",
    subtitle: "06",
    desc: "Bringing brands to life. We craft compelling narratives and leverage strong relationships with leading media outlets to negotiate favorable rates and maximize brand visibility.",
  },
  {
    id: 7,
    icon: sv_3,
    title: "Activation",
    subtitle: "07",
    desc: "Creating the brand experience. Our activation services focus on creating immersive and memorable brand interactions that resonate with your target audience.",
  },
  {
    id: 8,
    icon: sv_4,
    title: "Event",
    subtitle: "08",
    desc: "Driven innovative experiences. We design and execute innovative event experiences that bring your brand to the forefront and engage audiences in real-time.",
  },
  {
    id: 9,
    icon: sv_1,
    title: "Digital & Social Media Marketing",
    subtitle: "09",
    desc: "Driving Online Success Together. We specialize in customized digital strategies, including social media management and content creation, to help you build an engaging online presence.",
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
        // right: "200px",
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

export default function ServiceThree() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const titleRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (id: number) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHoveredId(id);
  };

  const handleLeave = () => {
    leaveTimer.current = setTimeout(() => setHoveredId(null), 120);
  };

  return (
    <div className="ab-about-area ab-about-mt pt-60 pb-90 z-index-5">
      <div className="container container-1480">
        <div id="about-info" className="row">
          <div className="col-xxl-12 ">
            <div className="ab-about-content p-relative">
              <p className=" tp_fade_bottom">
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
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        {service_data?.slice(0, 5)?.map((ser) => (
                          <div>
                            <Link
                              key={ser?.id}
                              target="_blank"
                              href={`/our-areas#service-${ser.id}`}
                              ref={(el: any) =>
                                (titleRefs.current[ser.id] = el)
                              }
                              className={`accordion-buttons ${ser.id !== 1 ? "collapsed" : ""}`}
                              type="button"
                              onMouseEnter={() => handleEnter(ser.id)}
                              onMouseLeave={handleLeave}
                              style={{ cursor: "pointer" }}
                            >
                              <li style={{ fontSize: "25px" }}>{ser?.title}</li>
                            </Link>
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
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        {service_data?.slice(5, 9)?.map((ser) => (
                          <div>
                            <Link
                              key={ser?.id}
                              target="_blank"
                              href={`/our-areas#service-${ser.id}`}
                              ref={(el: any) =>
                                (titleRefs.current[ser.id] = el)
                              }
                              className={`accordion-buttons ${ser.id !== 1 ? "collapsed" : ""}`}
                              type="button"
                              onMouseEnter={() => handleEnter(ser.id)}
                              onMouseLeave={handleLeave}
                              style={{ cursor: "pointer" }}
                            >
                              <li style={{ fontSize: "25px" }}>{ser?.title}</li>
                            </Link>
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
    </div>
  );
}
