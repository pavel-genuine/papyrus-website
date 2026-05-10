"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";

import shape from "@/assets/img/home-02/service/sv-shape-1.png";
import { ArrowBg, RightArrowTwo } from "@/components/svg";
import ser_1 from "@/assets/img/home-02/service/sv-icon-1.png";
import ser_2 from "@/assets/img/home-02/service/sv-icon-2.png";
import ser_3 from "@/assets/img/home-02/service/sv-icon-3.png";
import ser_4 from "@/assets/img/home-02/service/sv-icon-4.png";

const service_accordion = [
  {
    id: 1,
    icon: ser_1,
    title: "Strategic Planning",
    desc: "Sketching the brand roadmap. At Papyrus, our strategic planning services are designed to optimize your brand's online presence and drive results through in-depth research and data-driven insights.",
  },
  {
    id: 2,
    icon: ser_2,
    title: "Communication Planning",
    desc: "Developing effective communication. We offer customized communication planning services utilizing a data-driven approach to build strong relationships and enhance brand reputations.",
  },
  {
    id: 3,
    icon: ser_3,
    title: "Advertising",
    desc: "Crafting and promoting ideas. Papyrus offers a 360-advertising service encompassing print, TV, digital, and social media to help clients effectively reach their target audience.",
  },
  {
    id: 4,
    icon: ser_4,
    title: "Creative Designs",
    desc: "Creating Preference. Our team of designers uses a collaborative approach to develop tailored designs that effectively communicate your message and enhance brand identity.",
  },
  {
    id: 5,
    icon: ser_1,
    title: "Audio Visual & Print Production",
    desc: "Producing mind blotting Creatives. We utilize state-of-the-art technology to produce high-quality video advertisements and top-notch print materials like brochures and billboards.",
  },
  {
    id: 6,
    icon: ser_2,
    title: "PR & Media planning and Buying",
    desc: "Bringing brands to life. We craft compelling narratives and leverage strong relationships with leading media outlets to negotiate favorable rates and maximize brand visibility.",
  },
  {
    id: 7,
    icon: ser_3,
    title: "Activation",
    desc: "Creating the brand experience. Our activation services focus on creating immersive and memorable brand interactions that resonate with your target audience.",
  },
  {
    id: 8,
    icon: ser_4,
    title: "Event",
    desc: "Driven innovative experiences. We design and execute innovative event experiences that bring your brand to the forefront and engage audiences in real-time.",
  },
  {
    id: 9,
    icon: ser_1,
    title: "Digital & Social Media Marketing",
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
        left: rect.left + window.scrollX,
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
        right: "200px",
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

export default function ServiceHome() {
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
    <div className="tp-about-3-area pt-120 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <h5 className="sv-service-title tp_fade_bottom mb-20">
                We are all about adaptable approaches, implementing creative
                thinking, and driving long-lasting effective strategies that
                ensure a brand's success.
                <span>
                  {" "}
                  <br />
                </span>
              </h5>
              <div className="tp-about-3-content mt-10">
                <p className="mb-30 tp_fade_bottom">
                  Welcome to our Service Offerings page, where we empower your
                  success through our comprehensive range of solutions. Discover
                  how our services can elevate your business to new heights and
                  drive exceptional results. We provide diversified MARCOM
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-50">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="tp-service-2-shape-img text-center text-lg-start">
              <Image src={shape} alt="" />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {service_accordion.map((s) => (
                  <div key={s.id} className="accordion-items">
                    <h2 className="accordion-header">
                      {/* ✅ Changed: use ?service=id query param instead of hash */}
                      <Link href={`/our-areas?service=${s.id}`}>
                        <button
                          ref={(el: any) => (titleRefs.current[s.id] = el)}
                          className={`accordion-buttons ${s.id !== 1 ? "collapsed" : ""}`}
                          type="button"
                          onMouseEnter={() => handleEnter(s.id)}
                          onMouseLeave={handleLeave}
                          style={{ cursor: "pointer" }}
                        >
                          <span>
                            <Image src={s.icon} alt="icon" />
                          </span>
                          {s.title}
                        </button>
                      </Link>
                    </h2>

                    <DescTooltip
                      desc={s.desc}
                      anchorEl={titleRefs.current[s.id] ?? null}
                      visible={hoveredId === s.id}
                      onMouseEnter={() => handleEnter(s.id)}
                      onMouseLeave={handleLeave}
                    />
                  </div>
                ))}
              </div>
            </div>

            <Link
              className="tp-btn-black-2 tp_fade_bottom mt-100"
              href="/our-areas"
            >
              Our Areas
              <span className="p-relative">
                <RightArrowTwo />
                <ArrowBg />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
