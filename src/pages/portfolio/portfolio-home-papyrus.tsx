import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";

// internal imports
import shape from "@/assets/img/home-02/service/sv-shape-1.png";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import { ArrowBg, RightArrowTwo } from "@/components/svg";

// service data
const service_data = [
  {
    id: 1,
    title: "ATL",
    subItems: [
      { title: "Logo", link: "/service/atl/logo" },
      { title: "Packaging", link: "/service/atl/packaging" },
      { title: "Press Ad", link: "/service/atl/press-ad" },
      { title: "Billboard / Out-door", link: "/service/atl/billboard-outdoor" },
      { title: "Leaflet / Flyer", link: "/service/atl/leaflet-flyer" },
      {
        title: "Brochure / Catalogue",
        link: "/service/atl/brochure-catalogue",
      },
      { title: "Calendar", link: "/service/atl/calendar" },
      { title: "Annual Report", link: "/service/atl/annual-report" },
      { title: "Others", link: "/service/atl/others" },
      { title: "TVC", link: "/service/atl/tvc" },
      { title: "AV", link: "/service/atl/av" },
      { title: "PR", link: "/service/atl/pr" },
    ],
    icon: s_1,
  },
  {
    id: 2,
    title: "BTL",
    subItems: [
      { title: "Events", link: "/service/btl/events" },
      { title: "Activations", link: "/service/btl/activations" },
      { title: "Stall", link: "/service/btl/stall" },
    ],
    icon: s_2,
  },
  {
    id: 3,
    title: "Digital",
    subItems: [
      { title: "Static", link: "/service/digital/static" },
      { title: "Motion", link: "/service/digital/motion" },
      { title: "OVC", link: "/service/digital/ovc" },
      { title: "Music Video", link: "/service/digital/music-video" },
      { title: "Digital Campaign", link: "/service/digital/digital-campaign" },
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

  // Only mount on client — fixes SSR hydration mismatch
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

  // Don't render anything until client has mounted
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
// ── Main Component ───────────────────────────────────────────────────────────
export default function PortfolioHome() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const titleRefs = useRef<{ [key: number]: HTMLHeadingElement | null }>({});
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (id: number) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHoveredId(id);
  };

  // small delay so moving mouse from title → dropdown doesn't close it
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
                Our expertise lies in crafting perceptions that empower brands,
                making them exceptional and significant in the minds of
                consumers.
                <span>
                  {" "}
                  <br />
                </span>
              </h5>
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
            <div className="tp-service-right-wrap">
              {service_data.map((s) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image src={s.icon} alt="icon" style={{ height: "auto" }} />
                  </div>

                  <div className="tp-service-content">
                    <h4
                      className="tp-service-title-sm order-0"
                      ref={(el: any) => (titleRefs.current[s.id] = el)}
                      onMouseEnter={() => handleEnter(s.id)}
                      onMouseLeave={handleLeave}
                      style={{ cursor: "pointer", display: "inline-block" }}
                    >
                      <Link href="/service-details">{s.title}</Link>
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
                  </div>
                </div>
              ))}

              <Link
                className="tp-btn-black-2 tp_fade_bottom"
                href="/our-canvas"
              >
                Our Canvas
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
