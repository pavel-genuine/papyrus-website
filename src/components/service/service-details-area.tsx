"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import shape from "@/assets/img/home-01/portfolio/shape1.jpg";
import { useIsotop } from "@/hooks/use-isotop";
// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";
import port_1 from "@/assets/img/inner-project/showcase/showcase-1.jpg";
import port_2 from "@/assets/img/inner-project/showcase/showcase-2.jpg";
import port_3 from "@/assets/img/inner-project/showcase/showcase-3.jpg";
import port_4 from "@/assets/img/inner-project/showcase/showcase-4.jpg";
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import { createPortal } from "react-dom";
const servicesList = [
  {
    id: 1,
    title: "Logo ",
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
    title: "Motion",
    mainImg: port_4,
    thumbnails: [port_1, sv_3],
    desc: "Motion content optimized for digital platforms, social media feeds, and high-performance mobile viewing.",
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
    id: 141,
    title: "Static",
    mainImg: port_4,
    thumbnails: [port_1, sv_3],
    desc: "Static optimized for digital platforms, social media feeds, and high-performance mobile viewing.",
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
    id: 142,
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

// service data
const service_data = [
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
      { title: "TVC", link: "/our-canvas?service=tvc" },
      { title: "AV", link: "/our-canvas?service=av" },
      { title: "PR", link: "/our-canvas?service=pr-media-buying" },
      { title: "Others", link: "/our-canvas?service=campaign" }, // Mapping "Others" to "Campaign"
    ],
    icon: s_1,
  },
  {
    id: 2,
    title: "BTL",
    subItems: [
      { title: "Events", link: "/our-canvas?service=event" },
      { title: "Activations", link: "/our-canvas?service=activation" },
      { title: "Stall", link: "/our-canvas?service=stall" },
    ],
    icon: s_2,
  },
  {
    id: 3,
    title: "Digital",
    subItems: [
      { title: "Static", link: "/our-canvas?service=static" }, // Mapping static social posts
      {
        title: "Motion",
        link: "/our-canvas?service=motion",
      },
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
// data
const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/inner-project/portfolio-col-2/port-9.jpg",
    category: "Branding",
    title: "The Stage",
    year: "2024",
    show: "cat2 cat4",
  },
  {
    id: 2,
    img: "/assets/img/inner-project/portfolio-col-2/port-8.jpg",
    category: "Creative",
    title: "Big dream",
    year: "2023",
    show: "cat2 cat4 cat3",
  },
  {
    id: 3,
    img: "/assets/img/inner-project/portfolio-col-2/port-7.jpg",
    category: "Concept",
    title: "Sed Lectus",
    year: "2023",
    show: "cat4 cat2 cat3",
  },
  {
    id: 4,
    img: "/assets/img/inner-project/portfolio-col-2/port-6.jpg",
    category: "Branding",
    title: "Art Direction",
    year: "2024",
    show: "cat2 cat4 cat3",
  },
  {
    id: 5,
    img: "/assets/img/inner-project/portfolio-col-2/port-5.jpg",
    category: "Branding",
    title: "Petit Navire",
    year: "2024",
    show: "cat1 cat4 cat3",
  },
  {
    id: 6,
    img: "/assets/img/inner-project/portfolio-col-2/port-4.jpg",
    category: "Branding",
    title: "Big dream",
    year: "2024",
    show: "cat4 cat1 cat3",
  },
  {
    id: 7,
    img: "/assets/img/inner-project/portfolio-col-2/port-3.jpg",
    category: "Branding",
    title: "The Stage",
    year: "2024",
    show: "cat2 cat4 cat3",
  },
  {
    id: 8,
    img: "/assets/img/inner-project/portfolio-col-2/port-2.jpg",
    category: "Creative",
    title: "Big dream",
    year: "2024",
    show: "cat2 cat4",
  },
  {
    id: 9,
    img: "/assets/img/inner-project/portfolio-col-2/port-1.jpg",
    category: "Concept",
    title: "Sed Lectus",
    year: "2024",
    show: "cat1 cat3",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
// Inner component to safely use search params
function ServiceDetailsContent({ style_2 = false }: IProps) {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState(servicesList[0]);

  const [activeId, setActiveId] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

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

  // small delay so moving mouse from title → dropdown doesn't close it
  const handleLeave = () => {
    leaveTimer.current = setTimeout(() => setHoveredId(null), 120);
  };

  useEffect(() => {
    setIsMounted(true);
    const param = searchParams?.get("service");
  }, [searchParams]);

  useEffect(() => {
    if (isMounted && searchParams?.get("service")) {
      // Use requestAnimationFrame to wait for the next paint cycle
      // ensuring the filtered list is actually in the DOM
      requestAnimationFrame(() => {
        const element = document.getElementById(`service`);
        if (element) {
          const offset = 200; // Adjust if you have a sticky header
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
    }
  }, [activeId, isMounted]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const serviceQuery = searchParams?.get("service");

    if (serviceQuery) {
      // 1. Decode URL characters (like %26 for &)
      // 2. Replace dashes with spaces
      // 3. Remove all non-alphanumeric characters for a "fuzzy" match
      const cleanQuery = decodeURIComponent(serviceQuery)
        .replace(/-/g, " ")
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase()
        .trim();

      const found = servicesList.find((s) => {
        const cleanTitle = s.title
          .replace(/[^a-zA-Z0-9]/g, "")
          .toLowerCase()
          .trim();
        return cleanTitle === cleanQuery;
      });

      if (found) {
        setActiveService(found);
      }
    }
  }, [searchParams]);
  const handleTabClick = (e: any, item: any) => {
    e.preventDefault();
    setActiveService(item);
    requestAnimationFrame(() => {
      const element = document.getElementById(`service`);
      if (element) {
        const offset = 200; // Adjust if you have a sticky header
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
              {/* <p className="tp_fade_bottom">
                We provide powerful marketing services .
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div
                style={{}}
                className="sv-hero-thumb-box d-flex align-items-center justify-content-center"
              >
                <Image
                  data-speed=".7"
                  src={shape}
                  alt="ser_hero-img"
                  // width={1000}
                  // height={800}
                  // style={{ height: "auto", width: "80vw" }}
                />
              </div>
              {/* <Image
                className="sv-hero-thumb-shape d-none d-lg-block"
                src={ser_hero_shape}
                alt="ser_hero-shape"
                style={{ height: "auto" }}
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div
        id="service"
        className="container-fuild px-md-5 d-flex align-items-center justify-content-center"
      >
        <div className="tp-service d-lg-flex align-items-center mt-80">
          {service_data.map((s) => (
            <ul
              key={s.id}
              className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom mr-145"
            >
              <li
                style={{ listStyle: "outside" }}
                className="tp-service-content"
              >
                <h4
                  className="tp-service-title-sm order-0"
                  ref={(el: any) => (titleRefs.current[s.id] = el)}
                  onMouseEnter={() => handleEnter(s.id)}
                  onMouseLeave={handleLeave}
                  style={{ cursor: "pointer", display: "inline-block" }}
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
      <div className={`container container-${style_2 ? "1800" : "1530"}`}>
        <div className="row grid" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-4 col-lg-6 col-md-6 grid-item ${item.show}`}
            >
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor">
                <Link href="#" className="cursor-hide">
                  <Image
                    className="anim-zoomin"
                    src={item.img}
                    alt="port-img"
                    width={style_2 ? 573 : 486}
                    height={style_2 ? 683 : 576}
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Wrapping in Suspense is mandatory for useSearchParams in Next.js App Router
export default function ServiceDetailsArea() {
  return (
    <Suspense fallback={<div>Loading Canvas...</div>}>
      <ServiceDetailsContent />
    </Suspense>
  );
}
