"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import gsap from "gsap";
import { verTextFragment } from "@/utils/webgl-anim";

import { WebGL } from "@/plugins";
import showcase_1 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (1).png";
import showcase_2 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (2).png";
import showcase_3 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (3).png";
import showcase_4 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (4).png";
import showcase_5 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (5).png";
import showcase_6 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (6).png";
import showcase_7 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (7).png";
import showcase_8 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (8).png";
import showcase_9 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (9).png";
import showcase_10 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (10).png";
import showcase_11 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (11).png";
import showcase_12 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (12).png";
import showcase_13 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (13).png";
import showcase_14 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (14).png";
import showcase_15 from "@/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (15).png";

// ─── Slider Data ─────────────────────────────────────────────────────────────
const slider_data = [
  {
    id: 2,
    subtitle: "Branding & Marketing",
    title: "Band Some",
    youtubeUrl: "https://www.youtube.com/embed/Nhvi0TvxS6E",
    description: "Modern branding and web experience.",
    client: "Milk Land",
    year: "2024",
  },
  {
    id: 2001,
    subtitle: "Branding & Marketing",
    title: "Band Some",
    youtubeUrl: "https://www.youtube.com/embed/OCTB_Sa07sA",
    description: "Modern branding and web experience.",
    client: "Mr. White",
    year: "2024",
  },
  {
    id: 2002,
    subtitle: "Branding & Marketing",
    title: "Band Some",
    youtubeUrl: "https://www.youtube.com/embed/NBw8akBIzrg",
    description: "Modern branding and web experience.",
    client: "Bashundhara ready mix",
    year: "2024",
  },
  {
    id: 3,
    subtitle: "Branding & Marketing",
    title: "Lune Lab",
    youtubeUrl: "https://www.youtube.com/embed/fh5EQnNrJzM",
    description: "Creative lab portfolio showcase.",
    client: "Bashundhara Spice",
    year: "2023",
  },
  {
    id: 1,
    subtitle: "Branding & Marketing",
    title: "Top Paddock",
    youtubeUrl: "https://www.youtube.com/embed/zxY_lA7zeJk",
    description: "A beautiful UI and web design project.",
    client: "Bashundhara LPG",
    year: "2024",
  },
  {
    id: 1001,
    subtitle: "Branding & Marketing",
    title: "Top Paddock",
    youtubeUrl: "https://www.youtube.com/embed/kFx5BkRUiDE",
    description: "A beautiful UI and web design project.",
    client: "Bashundhara LPG joya",
    year: "2024",
  },
  {
    id: 4,
    subtitle: "Branding & Marketing",
    title: "Park 108 Nyc",
    youtubeUrl: "https://www.youtube.com/embed/LZoncSoN5uI",
    description: "Luxury real estate digital experience.",
    client: "Bashundhara ATA, Moida, Shuji ",
    year: "2023",
  },
  {
    id: 5,
    subtitle: "Branding & Marketing",
    title: "Park 108 Nyc",
    youtubeUrl: "https://www.youtube.com/embed/ao6Ka-zHOew",
    description: "Luxury real estate digital experience.",
    client: "Harpoon ",
    year: "2024",
  },
  {
    id: 6,
    subtitle: "Branding & Marketing",
    title: "Park 108 Nyc",
    youtubeUrl: "https://www.youtube.com/embed/HKkNpX945O0",
    description: "Luxury real estate digital experience.",
    client: "Quazi Safe Hands ",
    year: "2025",
  },
  {
    id: 7,
    subtitle: "Branding & Marketing",
    title: "Park 108 Nyc",
    youtubeUrl: "https://www.youtube.com/embed/TR833DwttyA",
    description: "Luxury real estate digital experience.",
    client: "Toggi Fun World",
    year: "2025",
  },
  {
    id: 7001,
    subtitle: "Branding & Marketing",
    title: "Park 108 Nyc",
    youtubeUrl: "https://www.youtube.com/embed/_0hHGdVTq8M",
    description: "Luxury real estate digital experience.",
    client: "Eagle Super aerosol",
    year: "2025",
  },
  {
    id: 7002,
    subtitle: "Branding & Marketing",
    title: "Park 108 Nyc",
    youtubeUrl: "https://www.youtube.com/embed/i0bTZdPnsOE",
    description: "Luxury real estate digital experience.",
    client: "Lemon Bright TVC",
    year: "2025",
  },
];

const slider_images = [
  showcase_14,
  showcase_1,
  showcase_2,
  showcase_3,
  showcase_4,
  showcase_5,
  showcase_6,
  showcase_7,
  showcase_8,
  showcase_9,
  showcase_10,
  showcase_11,
  showcase_12,
  showcase_13,
];

// ─── WebGL Transition Helper ──────────────────────────────────────────────────
function triggerWebGLTransition(webGL: any, realIndex: number) {
  if (!webGL || webGL.isRunning) return;
  webGL.isRunning = true;

  const triggerSlides = document.getElementById("trigger-slides");
  if (triggerSlides) {
    const allSlideWraps = triggerSlides.querySelectorAll(".slide-wrap");
    allSlideWraps.forEach((el) => el.classList.remove("active"));
    if (allSlideWraps[realIndex]) {
      allSlideWraps[realIndex].classList.add("active");
    }
  }

  webGL.material.uniforms.nextImage.value = webGL.textures[realIndex];
  webGL.material.uniforms.nextImage.needsUpdate = true;

  gsap.to(webGL.material.uniforms.dispFactor, {
    duration: 1,
    value: 1,
    ease: "Sine.easeInOut",
    onComplete: () => {
      webGL.material.uniforms.currentImage.value = webGL.textures[realIndex];
      webGL.material.uniforms.currentImage.needsUpdate = true;
      webGL.material.uniforms.dispFactor.value = 0.0;
      webGL.isRunning = false;
    },
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function PortfolioSliderHomeEleven() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const webGLContainerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  const webGLRef = useRef<any>(null);
  const activeSlideRef = useRef<(typeof slider_data)[0] | null>(null);

  const [activeSlide, setActiveSlide] = useState<
    (typeof slider_data)[0] | null
  >(null);

  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Modal Open ──────────────────────────────────────────────────────────────
  const handleOpen = (item: (typeof slider_data)[0]) => {
    activeSlideRef.current = item;
    setActiveSlide(item);
    swiperRef.current?.autoplay?.stop();
    setTimeout(() => setIframeReady(true), 400);
  };

  // ── Modal Close ─────────────────────────────────────────────────────────────
  const handleClose = () => {
    activeSlideRef.current = null;
    setActiveSlide(null);
    setIframeReady(false);
    swiperRef.current?.autoplay?.start();
  };

  // ── WebGL Init ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!webGLContainerRef.current) return;

    const webGL = new WebGL({
      vertex: verTextFragment().vertex,
      fragment: verTextFragment().fragment,
    });

    webGLRef.current = webGL;
    webGL.isRunning = false;
    webGLContainerRef.current.appendChild(webGL.renderer.domElement);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);

    return () => {
      webGL.stop();
    };
  }, []);

  const buildIframeSrc = (baseUrl: string) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    return `${baseUrl}?autoplay=1&origin=${origin}`;
  };

  return (
    <>
      <style jsx>{`
        /* ── Core Layout Dimensions with Header Offset ── */
        #port-showcase-slider-main {
          position: relative;
          width: 100%;
          margin-top: ${width > 768 ? "90px" : "80px"};
          height: ${width > 768 ? "calc(100vh - 90px)" : "calc(100vh - 80px)"};
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
          object-fit: cover;
        }

        .port-showcase-slider-spaces {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* ── Absolute Global Play Icon Overlay Layering ── */
        .video-play-overlay {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 99 !important;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1 !important;
          visibility: visible !important;
        }

        .play-icon-circle {
          width: 70px;
          height: 70px;
          background-color: rgba(247, 148, 29, 0.85);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff !important;
          font-size: 30px;
          transition: all 0.4s ease;
          box-shadow: 0 0 0 0 rgba(247, 148, 29, 0.4);
          animation: pulse-play 2s infinite;
        }

        #showcase-slider:hover .play-icon-circle {
          transform: scale(1.1);
          background-color: rgba(247, 148, 29, 1);
        }

        @keyframes pulse-play {
          0% {
            box-shadow: 0 0 0 0 rgba(247, 148, 29, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(247, 148, 29, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(247, 148, 29, 0);
          }
        }

        /* ── কাস্টম নেভিগেশন বাটন স্টাইল (মোবাইল ও ডেস্কটপ দুই জায়গাতেই ফিক্সড) ── */
        .tp-showcase-arrow-box {
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: rgba(0, 0, 0, 0.75) !important;
          border-radius: 30px;
          position: absolute !important;
          bottom: 5% !important;
          left: 49% !important;
          transform: translateX(-50%) !important;
          z-index: 999 !important; /* স্লাইডার কনটেন্টের উপরে জোর করে ধরে রাখার জন্য */
          padding: 8px 16px;
          visibility: visible !important;
          opacity: 1 !important;
          scale: 0.7;
        }

        .tp-showcase-arrow-box button {
          background: none;
          border: none;
          color: #fff !important;
          font-size: 20px;
          padding: 5px 15px;
          cursor: pointer;
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          z-index: 1000 !important;
        }

        /* ── Absolute Mobile Aspect Sizing Fixes ── */
        @media (max-width: 768px) {
          .tp-showcase-arrow-box {
            bottom: 0% !important; /* মোবাইলে যেন ভিডিও থাম্বনেইল না ঢাকে */
            left: 40% !important;
            padding: 5px 12px;
            scale: 0.5;
          }

          .tp-showcase-arrow-box button {
            font-size: 16px;
          }

          #port-showcase-slider-main,
          .port-showcase-slider-spaces,
          #showcase-slider-holder,
          #showcase-slider {
            height: auto !important;
            aspect-ratio: 800 / 369 !important;
            min-height: unset !important;
          }

          #canvas-slider {
            height: auto !important;
            aspect-ratio: 800 / 369 !important;
          }

          #canvas-slider canvas {
            width: 100% !important;
            height: 100% !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
          }

          .video-play-overlay {
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }

          .play-icon-circle {
            width: 55px !important;
            height: 55px !important;
            font-size: 22px !important;
            background-color: #f7941d !important;
          }
        }

        .iframe-loading-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          min-height: 300px;
          background-color: #111;
        }
      `}</style>

      {/* ── Slider ─────────────────────────────────────────────────────────── */}
      <div id="port-showcase-slider-main">
        {/* প্লে আইকন */}
        <div className="video-play-overlay">
          <div className="play-icon-circle">
            <i
              className="fa-solid fa-play"
              style={{ marginLeft: "4px", color: "#ffffff" }}
            ></i>
          </div>
        </div>

        {/* CRITICAL FIX: নেভিগেশন বক্সটিকে Swiper-এর অভ্যন্তরীণ লেয়ার থেকে বাইরে নিয়ে আসা হয়েছে।
          এর ফলে Swiper মোবাইলে এটিকে আর হাইড (display: none) করতে পারবে না।
        */}
        <div className="tp-showcase-arrow-box">
          <button className="tp-showcase__button-prev swiper-prev">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="tp-showcase__button-next swiper-next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div className="port-showcase-slider-spaces p-relative">
          <div
            className="port-showcase-slider-wrap tp-slider-parallax fix"
            id="showcase-slider-holder"
            data-pattern-img="/assets/img/webgl/1.jpg"
          >
            <div
              className="swiper-container parallax-slider-active p-relative"
              id="showcase-slider"
              data-cursor={`<div style="background-color: #f7941d; width: 50px; height: 50px;" ></div>`}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                if (!e.isTrusted) return;
                const target = e.target as HTMLElement;
                // বাটনে ক্লিক করলে যেন ভিডিও মোডাল অন না হয়ে যায় তার হ্যান্ডলার
                if (
                  target.closest(".tp-showcase-arrow-box") ||
                  target.closest(".swiper-prev") ||
                  target.closest(".swiper-next") ||
                  target.closest(".tp-slider-dot")
                )
                  return;
                if (activeSlideRef.current) return;
                const realIndex = swiperRef.current?.realIndex ?? 0;
                const slideItem = slider_data[realIndex];
                if (slideItem) handleOpen(slideItem);
              }}
            >
              <Swiper
                direction="horizontal"
                slidesPerView="auto"
                touchStartPreventDefault={false}
                speed={1000}
                loop={true}
                simulateTouch={true} /* মোবাইলে সুইপ করার সুবিধা চালু করা হলো */
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                navigation={{
                  nextEl: ".swiper-next",
                  prevEl: ".swiper-prev",
                }}
                pagination={{
                  el: ".tp-slider-dot",
                  clickable: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                onSlideChange={(swiper) => {
                  triggerWebGLTransition(webGLRef.current, swiper.realIndex);
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                id="trigger-slides"
              >
                {slider_data.map((item, i) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`slide-wrap${i === 0 ? " active" : ""}`}
                      data-slide={i}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="tp-slider-dot d-none d-md-block"></div>
            </div>
          </div>
        </div>

        {/* WebGL canvas container */}
        <div
          id="canvas-slider"
          className="canvas-slider"
          ref={webGLContainerRef}
          style={{
            position: "absolute",
            top: width < 768 ? "50%" : 0,
            left: width < 768 ? "50%" : 0,
            transform: width < 768 ? "translate(-50%, -50%)" : "none",
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          {slider_images.map((imgSrc, index) => (
            <div
              key={index}
              className="slider-img"
              data-slide={index}
              style={{ display: "none" }}
            >
              <Image
                className="slide-img"
                src={imgSrc}
                alt="showcase-img"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Modal ──────────────────────────────────────────────────────────── */}
      <Modal
        show={!!activeSlide}
        onHide={handleClose}
        size="lg"
        centered
        className="portfolio-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {activeSlide && (
            <div className="bg-dark" style={{ width: "100vw" }}>
              <div className=" ">
                {iframeReady ? (
                  <iframe
                    src={buildIframeSrc(activeSlide.youtubeUrl)}
                    title={activeSlide.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                      border: "none",
                      borderRadius: "10px",
                      width: width > 768 ? "97vw" : "90vw",
                      height: width > 768 ? "95vh" : "40vh",
                      margin: "20px",
                    }}
                  />
                ) : (
                  <div className="iframe-loading-placeholder">
                    <div
                      className="spinner-border text-light"
                      role="status"
                      aria-label="Loading video..."
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
