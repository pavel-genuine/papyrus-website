"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { client } from "@/sanity/lib/client";

// Internal imports
import shape from "@/assets/img/home-01/portfolio/shape1.jpg";
import { ArrowBg, RightArrowTwo } from "@/components/svg";

// Shared Dynamic Data & Types Import
import {
  static_service_data,
  mergeStaticAndSanityData,
  ServiceData,
  SubItem,
} from "@/data/service-data";

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
              href={hasSubSub ? "#" : item.link}
              onClick={(e) => hasSubSub && e.preventDefault()}
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
                cursor: hasSubSub ? "default" : "pointer",
              }}
            >
              <span>{item.title}</span>
              {hasSubSub && <span style={{ fontSize: "12px" }}>▶</span>}
            </Link>

            {/* Layer 2: Nested Items (Events, Activations, Stall) */}
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
                        href={hasDeepSub ? "#" : subSub.link}
                        onClick={(e) => hasDeepSub && e.preventDefault()}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px 18px",
                          color: isDeepOpen ? "#ff5e14" : "#bbbbbb",
                          fontSize: "14px",
                          textDecoration: "none",
                          background: isDeepOpen ? "#2d2d2d" : "transparent",
                          cursor: hasDeepSub ? "default" : "pointer",
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

                      {/* Layer 3: Deep Items (Bank Asia Limited branches) */}
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

// ── Main Exported Component ──────────────────────────────────────────────────
export default function PortfolioHome() {
  const [width, setWidth] = useState(0);
  const [allServiceData, setAllServiceData] =
    useState<ServiceData[]>(static_service_data);
  const [hoveredId, setHoveredId] = useState<number | string | null>(null);

  const titleRefs = useRef<{
    [key: string | number]: HTMLHeadingElement | null;
  }>({});
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Fetch from Sanity and Merge via centralized logic
  useEffect(() => {
    const fetchSanityServices = async () => {
      try {
        const query = `*[_type == "our-canvas"] {
          "id": _id,
          item,
          subItems[] {
            "title": coalesce(atlSub, btlSub, digitalSub),
            link,
            "data": data[] {
              "id": _key,
              title,
              mediaType,
              "src": src.asset->url,
              youtubeUrl
            },
            "nestedItems": subItems[] {
              title,
              link,
              "data": data[] {
                "id": _key,
                title,
                mediaType,
                "src": src.asset->url,
                youtubeUrl
              },
              "deepItems": deepItems[] {
                title,
                link,
                "data": data[] {
                  "id": _key,
                  title,
                  mediaType,
                  "src": src.asset->url,
                  youtubeUrl
                }
              }
            }
          }
        }`;

        const sanityData = await client.fetch(query);
        if (sanityData && sanityData.length > 0) {
          const finalMergedData = mergeStaticAndSanityData(
            static_service_data,
            sanityData,
          );
          setAllServiceData(finalMergedData);
        }
      } catch (error) {
        console.error("Sanity connection error on Home:", error);
      }
    };

    fetchSanityServices();
  }, []);

  const handleEnter = (id: number | string) => {
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
                alt="portfolio-canvas"
              />
            </div>
          </div>

          <div
            style={{
              paddingLeft: width > 768 ? "70px" : "20px",
              paddingTop: "50px",
            }}
            className="col-xl-6 col-lg-6 col-md-12"
          >
            <div className="tp-service-right-wrap">
              {allServiceData.map((s) => (
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
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        {s.item}
                      </Link>
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
