"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";

// internal imports
import shape from "@/assets/img/home-01/portfolio/shape1.jpg";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import { ArrowBg, RightArrowTwo } from "@/components/svg";

// Interfaces
interface DeepSubItem {
  title: string;
  link: string;
}

interface SubSubItem {
  title: string;
  link: string;
  deepItems?: DeepSubItem[];
}

interface SubItem {
  title: string;
  link: string;
  nestedItems?: SubSubItem[];
}

interface ServiceData {
  id: number;
  title: string;
  subItems: SubItem[];
  icon: any;
}

// Complete 3-layer service data integrated from service-details-area
const service_data: ServiceData[] = [
  {
    id: 1,
    title: "ATL",
    subItems: [
      { title: "Logo", link: "/our-canvas?service=logo" },
      { title: "Packaging", link: "/our-canvas?service=packaging" },
      { title: "Press Ad", link: "/our-canvas?service=press-ad" },
      { title: "Billboard / Out-door", link: "/our-canvas?service=bill-board" },
      { title: "Leaflet / Flyer", link: "/our-canvas?service=leaflet" },
      {
        title: "Brochure / Catalogue",
        link: "/our-canvas?service=brochure-catalogue",
      },
      { title: "Calendar", link: "/our-canvas?service=calendar" },
      { title: "Annual Report", link: "/our-canvas?service=annual-report" },
      { title: "TVC", link: "/our-canvas?service=TVC" },
      { title: "AV", link: "/our-canvas?service=av" },
      { title: "PR", link: "/our-canvas?service=pr-media-buying" },
      { title: "Others", link: "/our-canvas?service=others-campaign" },
    ],
    icon: s_1,
  },
  {
    id: 2,
    title: "BTL",
    subItems: [
      {
        title: "Events",
        link: "/our-canvas?service=manikganj-school-100-years",
        nestedItems: [
          {
            title: "Manikganj Model High School 100 Years Celebration Event",
            link: "/our-canvas?service=manikganj-school-100-years",
          },
          {
            title: "6th-generation Kia Sportage 2026 Launching Event",
            link: "/our-canvas?service=kia-sportage-2026-launch",
          },
          {
            title: "EC Daily pakage reviled event",
            link: "/our-canvas?service=ec-daily-package-revealed",
          },
          {
            title: "Finlay South City Shopping Mall Grand Launching Event",
            link: "/our-canvas?service=finlay-south-city-launch",
          },
          {
            title:
              "Forland, Metal Motors Limited 6th Dhaka Commercial Automotive Show",
            link: "/our-canvas?service=forland-metal-motors-automotive-show",
          },
          {
            title: "EC sunflower Product Launching Ceremony",
            link: "/our-canvas?service=ec-sunflower-launch",
          },
          {
            title: "ACI Motors,5th Dhaka Commercial Automotive Show",
            link: "/our-canvas?service=aci-motors-automotive-show",
          },
          {
            title: "Chartered Life Annual Awards Night 2022",
            link: "/our-canvas?service=chartered-life-awards-2022",
          },
          {
            title: "Rupayan City Uttara, Project Handover Ceremony",
            link: "/our-canvas?service=rupayan-city-handover",
          },
          {
            title: "Bosudhara Group, চেতনার বর্ণমালা Event",
            link: "/our-canvas?service=bosudhara-chetonar-bornomala",
          },
          {
            title: "Pharmasia Limited,Pharmasia Conference 2022",
            link: "/our-canvas?service=pharmasia-conference-2022",
          },
          {
            title:
              "Chartered Life Insurance Company Limited, Annual Conference",
            link: "/our-canvas?service=chartered-life-annual-conference",
          },
          {
            title:
              "চার্টার্ড লাইফ ইন্সুরেন্স কোম্পানী লিমিটেড, রং তুলিতে মুক্তিযুদ্ধ",
            link: "/our-canvas?service=chartered-life-rong-tulite-muktijuddho",
          },
          {
            title: "Channel I + Safe Hands, রং তুলিতে মুক্তিযুদ্ধ Event",
            link: "/our-canvas?service=channel-i-safe-hands-muktijuddho",
          },
          {
            title: "Fogg Spcial Audition Launching Press Conference",
            link: "/our-canvas?service=fogg-special-audition-press-conf",
          },
          {
            title: "DT( Dhaka Tribune ),5th Anniversary of DT",
            link: "/our-canvas?service=dhaka-tribune-5th-anniversary",
          },
          {
            title: "Jafflong Tea Event",
            link: "/our-canvas?service=jafflong-tea-event",
          },
          {
            title: "Launching of CLUB LOVELLO",
            link: "/our-canvas?service=launching-of-club-lovello",
          },
          {
            title: "Kulna Titens Activation Work",
            link: "/our-canvas?service=khulna-titans-activation",
          },
          {
            title: "Bank Asia Limited",
            link: "/our-canvas?service=bank-asia-limited",
            deepItems: [
              {
                title: "Aglabazar Branch Opening",
                link: "/our-canvas?service=aglabazar-branch-opening",
              },
              {
                title: "Airport Branding",
                link: "/our-canvas?service=airport-branding",
              },
              {
                title: "Annual General Meeting",
                link: "/our-canvas?service=annual-general-meeting",
              },
              {
                title: "CSR Event, Nowakhali Chatkhil",
                link: "/our-canvas?service=csr-event-noakhali-chatkhil",
              },
              {
                title: "Narshindi Branch Opening",
                link: "/our-canvas?service=narshindi-branch-opening",
              },
              {
                title: "Sylhet Branch Opening",
                link: "/our-canvas?service=sylhet-branch-opening",
              },
            ],
          },
        ],
      },
      {
        title: "Activations",
        link: "/our-canvas?service=AKIJ-PLASTICS",
        nestedItems: [
          { title: "AKIJ PLASTICS", link: "/our-canvas?service=AKIJ-PLASTICS" },
          {
            title: "BERGER EASY CLEAN ACTIVATION",
            link: "/our-canvas?service=BERGER-EASY-CLEAN-ACTIVATION",
          },
          {
            title: "DABUR RED TOOTHPASTE",
            link: "/our-canvas?service=DABUR-RED-TOOTHPASTE",
          },
          {
            title: "EAGLE SUPER AEROSOL",
            link: "/our-canvas?service=EAGLE-SUPER-AEROSOL",
          },
          {
            title: "FREEDOM SANITARY NAPKIN",
            link: "/our-canvas?service=FREEDOM-SANITARY-NAPKIN",
          },
          { title: "Mr White", link: "/our-canvas?service=Mr-White" },
          {
            title: "QUAZI ENTERPRISES CARAVAN ACTIVATIONS",
            link: "/our-canvas?service=QUAZI-ENTERPRISES-CARAVAN-ACTIVATIONS",
          },
          { title: "SAFE HANDS", link: "/our-canvas?service=SAFE-HANDS" },
          { title: "Wonder", link: "/our-canvas?service=Wonder" },
          {
            title: "SAVLON HAND WASH",
            link: "/our-canvas?service=SAVLON-HAND-WASH",
          },
        ],
      },
      {
        title: "Stall",
        link: "/our-canvas?service=ACI–STALL-DESIGN-AND-EXECUTION",
        nestedItems: [
          {
            title: "ACI – STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=ACI–STALL-DESIGN-AND-EXECUTION",
          },
          {
            title: "AIRPORT IMMIGRATION BOOTH BRANDING",
            link: "/our-canvas?service=AIRPORT-IMMIGRATION-BOOTH-BRANDING",
          },
          {
            title: "FREEDOM - DITF STALL EXECUTION",
            link: "/our-canvas?service=FREEDOM-DITF-STALL-EXECUTION",
          },
          {
            title: "GLOBAL BRAND STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=GLOBAL-BRAND-STALL-DESIGN-AND-EXECUTION",
          },
          {
            title: "GUARDIAN STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=GUARDIAN-STALL-DESIGN-AND-EXECUTION",
          },
          {
            title: "METAL – STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=METAL–STALL-DESIGN-AND-EXECUTION",
          },
          {
            title: "RUPAYAN - STALL DESIGN & EXECUTION",
            link: "/our-canvas?service=RUPAYAN-STALL-DESIG-&-EXECUTION",
          },
          {
            title: "SHANTA HOLDINGS – STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=SHANTA-HOLDINGS–STALL-DESIGN-AND-EXECUTION",
          },
          {
            title: "TOTALGAZ - STALL DESIGN & EXECUTION",
            link: "/our-canvas?service=TOTALGAZ-STALL-DESIGN-&-EXECUTION",
          },
        ],
      },
    ],
    icon: s_2,
  },
  {
    id: 3,
    title: "Digital",
    subItems: [
      { title: "Static", link: "/our-canvas?service=static" },
      { title: "Motion", link: "/our-canvas?service=motion" },
      { title: "OVC", link: "/our-canvas?service=ovc" },
      { title: "Music Video", link: "/our-canvas?service=music-video" },
      {
        title: "Digital Campaign",
        link: "/our-canvas?service=digital-social-media-marketing",
      },
    ],
    icon: s_3,
  },
];

// ── Smart 3-Layer Portal Dropdown ────────────────────────────────────────────
function SubMenu({
  items,
  anchorEl,
  visible,
  onMouseEnter,
  onMouseLeave,
}: {
  items: SubItem[];
  anchorEl: HTMLElement | null;
  visible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const [activeChildMenu, setActiveChildMenu] = useState<number | null>(null);
  const [activeDeepMenu, setActiveDeepMenu] = useState<number | null>(null);

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
      onMouseLeave={() => {
        onMouseLeave();
        setActiveChildMenu(null);
        setActiveDeepMenu(null);
      }}
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
        width: "250px",
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
      {items.map((item, i) => {
        const hasSubSub = !!(item.nestedItems && item.nestedItems.length > 0);
        const isChildOpen = activeChildMenu === i;

        return (
          <li
            key={i}
            style={{ padding: "0", position: "relative" }}
            onMouseEnter={() => hasSubSub && setActiveChildMenu(i)}
            onMouseLeave={() => setActiveChildMenu(null)}
          >
            <Link
              href={item.link}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 18px",
                color: isChildOpen ? "#ff5e14" : "#cccccc",
                fontSize: "16px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                background: isChildOpen ? "#2a2a2a" : "transparent",
                transition: "all 0.2s ease",
              }}
            >
              <span>{item.title}</span>
              {hasSubSub && <span style={{ fontSize: "12px" }}>▶</span>}
            </Link>

            {/* Layer 2: Nested Items (e.g., Manikganj School, Kia Sportage) */}
            {hasSubSub && isChildOpen && item.nestedItems && (
              <ul
                style={{
                  position: "absolute",
                  top: 0,
                  left: "100%",
                  width: "260px",
                  listStyle: "none",
                  margin: 0,
                  padding: "4px 0",
                  background: "#222222",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                  borderRadius: "6px",
                  border: "1px solid #3a3a3a",
                  zIndex: 100000,
                }}
              >
                {item.nestedItems.map((subSub, subIdx) => {
                  const hasDeepSub = !!(
                    subSub.deepItems && subSub.deepItems.length > 0
                  );
                  const isDeepOpen = activeDeepMenu === subIdx;

                  return (
                    <li
                      key={subIdx}
                      style={{ padding: "0", position: "relative" }}
                      onMouseEnter={() =>
                        hasDeepSub && setActiveDeepMenu(subIdx)
                      }
                      onMouseLeave={() => setActiveDeepMenu(null)}
                    >
                      <Link
                        href={subSub.link}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px 18px",
                          color: isDeepOpen ? "#ff5e14" : "#bbbbbb",
                          fontSize: "14px",
                          textDecoration: "none",
                          background: isDeepOpen ? "#2d2d2d" : "transparent",
                        }}
                      >
                        <span
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "200px",
                            display: "inline-block",
                          }}
                        >
                          {subSub.title}
                        </span>
                        {hasDeepSub && (
                          <span style={{ fontSize: "10px" }}>▶</span>
                        )}
                      </Link>

                      {/* Layer 3: Deep Items (e.g., Bank Asia Branch Openings) */}
                      {hasDeepSub && isDeepOpen && subSub.deepItems && (
                        <ul
                          style={{
                            position: "absolute",
                            top: 0,
                            left: "100%",
                            width: "220px",
                            listStyle: "none",
                            margin: 0,
                            padding: "4px 0",
                            background: "#2d2d2d",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                            borderRadius: "6px",
                            border: "1px solid #4a4a4a",
                            zIndex: 100001,
                          }}
                        >
                          {subSub.deepItems.map((deepItem, deepIdx) => (
                            <li key={deepIdx} style={{ padding: "0" }}>
                              <Link
                                href={deepItem.link}
                                style={{
                                  display: "block",
                                  padding: "10px 25px",
                                  color: "#aaaaaa",
                                  fontSize: "14px",
                                  textDecoration: "none",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.color = "#ff5e14")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.color = "#aaaaaa")
                                }
                              >
                                {deepItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>,
    document.body,
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function PortfolioHome() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const titleRefs = useRef<{ [key: number]: HTMLHeadingElement | null }>({});
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (id: number) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHoveredId(id);
  };

  const handleLeave = () => {
    leaveTimer.current = setTimeout(() => setHoveredId(null), 120);
  };

  return (
    <div className="tp-about-3-area pt-120 pb-110 black-bg ">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <h5 className="sv-service-title tp_fade_bottom mb-20">
                Our expertise lies in crafting perceptions that empower brands,
                making them exceptional and significant in the minds of
                consumers.
                <span>
                  <br />
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-50">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div>
              <Image
                style={{
                  width: width > 768 ? "550px" : "100vw",
                  height: width > 768 ? "450px" : "auto",
                  borderRadius: "10px",
                }}
                src={shape}
                alt=""
              />
            </div>
          </div>

          <div
            style={{
              paddingLeft: width > 768 ? "70px" : "20px",
              paddingTop: width > 768 ? "50px" : "50px",
            }}
            className="col-xl-6 col-lg-6 col-md-12"
          >
            <div className="tp-service-right-wrap">
              {service_data.map((s) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image
                      src={s.icon}
                      alt="icon"
                      style={{
                        height: "auto",
                        paddingRight: width > 768 ? "0px" : "20px",
                      }}
                    />
                  </div>

                  <div className="tp-service-content">
                    <h4
                      className="tp-service-title-sm order-0"
                      ref={(el: any) => (titleRefs.current[s.id] = el)}
                      onMouseEnter={() => handleEnter(s.id)}
                      onMouseLeave={handleLeave}
                      style={{ cursor: "pointer", display: "inline-block" }}
                    >
                      <Link href="#">{s.title}</Link>
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
