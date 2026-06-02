"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import shape from "@/assets/img/home-01/portfolio/shape1.jpg";
import { useIsotop } from "@/hooks/use-isotop";

// Icons & Images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import { createPortal } from "react-dom";

// Interface for Portfolio Items
interface PortfolioItem {
  id: number;
  category: string;
  src: string;
  title: string;
}

// ── Service Data with Nested Portfolio Items ─────────────────────────────────
const service_data = [
  {
    id: 1,
    title: "ATL",
    subItems: [
      {
        title: "Logo",
        link: "/our-canvas?service=logo",
        data: Array.from({ length: 45 }, (_, index) => ({
          id: index + 1,
          category: "logo",
          src: `/assets/img/home-01/portfolio/Logo/logo (${index + 1}).png`,
          title: `Logo Project ${index + 1}`,
        })),
      },
      {
        title: "Packaging",
        link: "/our-canvas?service=packaging",
        data: Array.from({ length: 66 }, (_, index) => ({
          id: index + 101,
          category: "packaging",
          src: `/assets/img/home-01/portfolio/Packaging/packaging (${index + 1}).png`,
          title: `Packaging Project ${index + 1}`,
        })),
      },
      {
        title: "Press Ad",
        link: "/our-canvas?service=press-ad",
        data: Array.from({ length: 49 }, (_, index) => ({
          id: index + 101,
          category: "packaging",
          src: `/assets/img/home-01/portfolio/Press-add/press-ad (${index + 1}).png`,
          title: `Packaging Project ${index + 1}`,
        })),
      },
      {
        title: "Billboard - Out-door",
        link: "/our-canvas?service=bill-board",
        data: [],
      },
      {
        title: "Leaflet - Flyer",
        link: "/our-canvas?service=leaflet",
        data: [],
      },
      {
        title: "Brochure - Catalogue",
        link: "/our-canvas?service=brochure-catalogue",
        data: Array.from({ length: 23 }, (_, index) => ({
          id: index + 101,
          category: "packaging",
          src: `/assets/img/home-01/portfolio/Brochure-Catalogue/Brochure-catalogue (${index + 1}).png`,
          title: `Packaging Project ${index + 1}`,
        })),
      },
      { title: "Calendar", link: "/our-canvas?service=calendar", data: [] },
      {
        title: "Annual Report",
        link: "/our-canvas?service=annual-report",
        data: [],
      },
      { title: "TVC", link: "/our-canvas?service=tvc", data: [] },
      { title: "AV", link: "/our-canvas?service=av", data: [] },
      { title: "PR", link: "/our-canvas?service=pr-media-buying", data: [] },
      { title: "Others", link: "/our-canvas?service=campaign", data: [] },
    ],
    icon: s_1,
  },
  {
    id: 2,
    title: "BTL",
    subItems: [
      {
        title: "Events",
        link: "/our-canvas?service=event",
        data: Array.from({ length: 6 }, (_, index) => ({
          id: index + 201,
          category: "event",
          src: `/assets/img/home-01/portfolio/Logo/logo (2).png`,
          title: `Event Project ${index + 1}`,
        })),
      },
      {
        title: "Activations",
        link: "/our-canvas?service=activation",
        data: [],
      },
      { title: "Stall", link: "/our-canvas?service=stall", data: [] },
    ],
    icon: s_2,
  },
  {
    id: 3,
    title: "Digital",
    subItems: [
      {
        title: "Static",
        link: "/our-canvas?service=static",
        data: Array.from({ length: 4 }, (_, index) => ({
          id: index + 301,
          category: "static",
          src: `/assets/img/home-01/portfolio/Logo/logo (3).png`,
          title: `Static Design ${index + 1}`,
        })),
      },
      { title: "Motion", link: "/our-canvas?service=motion", data: [] },
      { title: "OVC", link: "/our-canvas?service=ovc", data: [] },
      {
        title: "Music Video",
        link: "/our-canvas?service=music-video",
        data: [],
      },
      {
        title: "Digital Campaign",
        link: "/our-canvas?service=digital-social-media-marketing",
        data: [],
      },
    ],
    icon: s_3,
  },
];

// ── Portal Dropdown ──────────────────────────────────────────────────────────
function SubMenu({
  items,
  anchorEl,
  visible,
  onMouseEnter,
  onMouseLeave,
}: {
  items: { title: string; link: string }[];
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
        top: rect.bottom + window.scrollY + 6,
        left: rect.left + window.scrollX,
      });
    }
  }, [visible, anchorEl]);

  if (!mounted) return null;

  return createPortal(
    <ul
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left,
        zIndex: 99999,
        listStyle: "none",
        margin: 0,
        padding: "8px 0",
        background: "#1a1a1a",
        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        minWidth: "200px",
        borderRadius: "6px",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transform: visible ? "translateY(0px)" : "translateY(-6px)",
        transition:
          "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease",
        pointerEvents: visible ? "auto" : "none",
        border: "1px solid #2e2e2e",
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            padding: "0",
            borderBottom: i < items.length - 1 ? "1px solid #2e2e2e" : "none",
          }}
        >
          <Link
            href={item.link}
            style={{
              display: "block",
              padding: "8px 18px",
              color: "#cccccc",
              fontSize: "18px",
              fontWeight: "400",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.15s ease, color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#2a2a2a";
              (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#cccccc";
            }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>,
    document.body,
  );
}

type IProps = {
  style_2?: boolean;
};

// ── Inner Content Component ──────────────────────────────────────────────────
function ServiceDetailsContent({ style_2 = false }: IProps) {
  const { initIsotop, isotopContainer } = useIsotop();
  const searchParams = useSearchParams();

  const [currentService, setCurrentService] = useState<string | null>(null);
  // ইনিশিয়ালি খালি অ্যারে রাখা হয়েছে যাতে প্রথম লোডে কিছু না দেখায়
  const [filteredData, setFilteredData] = useState<PortfolioItem[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [width, setWidth] = useState(0);

  const titleRefs = useRef<{ [key: number]: HTMLHeadingElement | null }>({});
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize Isotope
  useEffect(() => {
    if (filteredData.length > 0) {
      initIsotop();
    }
  }, [initIsotop, filteredData]);

  // Window Resize handling
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // URL query parameter effect
  useEffect(() => {
    const serviceParam: any = searchParams?.get("service");
    setCurrentService(serviceParam);

    if (serviceParam) {
      let targetData: PortfolioItem[] = [];

      for (const service of service_data) {
        const matchedSubItem = service.subItems.find((sub) =>
          sub.link
            .toLowerCase()
            .includes(`service=${serviceParam.toLowerCase()}`),
        );
        if (matchedSubItem && matchedSubItem.data) {
          targetData = matchedSubItem.data;
          break;
        }
      }

      setFilteredData(targetData);

      // Smooth scroll adjustment
      requestAnimationFrame(() => {
        const element = document.getElementById("service-section");
        if (element) {
          const offset = 120;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    } else {
      // কোনো subItem ক্লিক না হলে (অর্থাৎ ফার্স্ট লোডে) স্টেট খালি থাকবে
      setFilteredData([]);
    }
  }, [searchParams]);

  const handleEnter = (id: number) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHoveredId(id);
  };

  const handleLeave = () => {
    leaveTimer.current = setTimeout(() => setHoveredId(null), 120);
  };

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-11">
            <div className="sv-hero-title-box">
              <h6
                style={{ fontSize: width > 768 ? "75px" : "45px" }}
                className="sv-hero-title tp-char-animation"
              >
                Our expertise lies in crafting perceptions that empower brands,
                making them exceptional and significant in the minds of
                consumers.
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box d-flex align-items-center justify-content-center">
                <Image data-speed=".7" src={shape} alt="ser_hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation & target element wrapper */}
      <div
        id="service-section"
        className="container-fuild px-md-5 d-flex align-items-center justify-content-center"
      >
        <div className="tp-service d-lg-flex align-items-center mt-80">
          {service_data.map((s) => (
            <ul
              key={s.id}
              className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom mr-145"
              style={{ padding: 0 }}
            >
              <li style={{ listStyle: "none" }} className="tp-service-content">
                <h4
                  className="tp-service-title-sm order-0"
                  ref={(el: any) => (titleRefs.current[s.id] = el)}
                  onMouseEnter={() => handleEnter(s.id)}
                  onMouseLeave={handleLeave}
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    color: s.subItems.some((sub) =>
                      sub.link
                        .toLowerCase()
                        .includes(`service=${currentService?.toLowerCase()}`),
                    )
                      ? "#ff5e14"
                      : "inherit",
                  }}
                >
                  <Link href="/our-canvas">{s.title}</Link>
                </h4>

                {s.subItems && (
                  <SubMenu
                    items={s.subItems}
                    anchorEl={titleRefs.current[s.id] ?? null}
                    visible={hoveredId === s.id}
                    onMouseEnter={() => handleEnter(s.id)}
                    onMouseLeave={handleLeave}
                  />
                )}
              </li>
            </ul>
          ))}
        </div>
      </div>

      {/* Grid Portfolio Display Section */}
      {/* ইউআরএল-এ service প্যারামিটার থাকলেই কেবল এই গ্রিড সেকশনটি রেন্ডার হবে */}
      {currentService && (
        <div className={`  container `}>
          <div className="row grid" ref={isotopContainer}>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div
                  key={item.id}
                  className="col-xl-4 col-lg-6 col-md-6 grid-item"
                >
                  <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor">
                    <Link href="#" className="cursor-hide">
                      <Image
                        className="anim-zoomin"
                        src={item.src}
                        alt={item.title}
                        width={style_2 ? 573 : 600}
                        height={style_2 ? 683 : 600}
                        style={{
                          width: "280px",
                          height: "auto",
                          objectFit: "fill",
                        }}
                      />
                      <div className="tp-project-5-2-content tp_fade_anim">
                        <h4
                          className="tp-project-5-2-title-sm"
                          style={{ color: "#fff", marginTop: "10px" }}
                        >
                          {/* {item.title} */}
                        </h4>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center mt-50">
                <p style={{ color: "#888", fontSize: "18px" }}>
                  No items found for this canvas.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Exported Component ──────────────────────────────────────────────────
export default function ServiceDetailsArea() {
  return (
    <Suspense
      fallback={
        <div className="text-center pt-200 pb-200">Loading Canvas...</div>
      }
    >
      <ServiceDetailsContent />
    </Suspense>
  );
}
