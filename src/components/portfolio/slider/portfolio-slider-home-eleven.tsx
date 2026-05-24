"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import gsap from "gsap";
import { verTextFragment } from "@/utils/webgl-anim";
import { WebGL } from "@/plugins";
import showcase_1 from "@/assets/img/inner-project/showcase/showcase-1.jpg";
import showcase_2 from "@/assets/img/inner-project/showcase/showcase-2.jpg";
import showcase_3 from "@/assets/img/inner-project/showcase/showcase-3.jpg";
import showcase_4 from "@/assets/img/inner-project/showcase/showcase-4.jpg";

// ─── Slider Data ─────────────────────────────────────────────────────────────
const slider_data = [
  {
    id: 1,
    subtitle: "Branding & Marketing",
    title: "Top Paddock",
    youtubeUrl: "https://www.youtube.com/embed/Nhvi0TvxS6E",
    description: "A beautiful UI and web design project.",
    client: "Akij Dairy",
    year: "2024",
  },
  {
    id: 2,
    subtitle: "Branding & Marketing",
    title: "Band Some",
    youtubeUrl: "https://www.youtube.com/embed/F2S30xmksIw",
    description: "Modern branding and web experience.",
    client: "Mr. White",
    year: "2024",
  },
  {
    id: 3,
    subtitle: "Branding & Marketing",
    title: "Lune Lab",
    youtubeUrl: "https://www.youtube.com/embed/_PUuZs4LXXM",
    description: "Creative lab portfolio showcase.",
    client: "Bashundhara Spice",
    year: "2023",
  },
  {
    id: 4,
    subtitle: "Branding & Marketing",
    title: "Park 108 Nyc",
    youtubeUrl: "https://www.youtube.com/embed/KDuOZZTydNI",
    description: "Luxury real estate digital experience.",
    client: "Bashundhara LPG",
    year: "2023",
  },
];

const slider_images = [showcase_1, showcase_2, showcase_3, showcase_4];

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
          margin-top: 80px;
          height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
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
          /* Uses high z-index to break clean over Swiper stacks and WebGL instances */
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

        /* ── Absolute Mobile Aspect Sizing Fixes ── */
        @media (max-width: 768px) {
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
            background-color: #f7941d !important; /* Locks visible opaque color on mobile */
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
        {/* 
          CRITICAL MOVE: Placed global icon overlay at root context of slider layout block.
          This prevents Swiper internal slides from rendering on top of the icon.
        */}
        <div className="video-play-overlay">
          <div className="play-icon-circle">
            <i
              className="fa-solid fa-play"
              style={{ marginLeft: "4px", color: "#ffffff" }}
            ></i>
          </div>
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
                if (
                  target.closest(".tp-showcase-arrow-box") ||
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
                simulateTouch={false}
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

              <div
                style={{ backgroundColor: "#00000096", borderRadius: "30px" }}
                className="tp-showcase-arrow-box"
              >
                <button className="tp-showcase__button-next swiper-next">
                  <i className="fa-light fa-angle-up"></i>
                </button>
                <button className="tp-showcase__button-prev swiper-prev">
                  <i className="fa-light fa-angle-down"></i>
                </button>
              </div>
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

              {/* Project details */}
              <div className="z-index-9">
                <div className="container">
                  <div className="project-details-video-style">
                    <div className="row align-items-start">
                      <div className="col-xl-12">
                        <div className="project-details-1-info-wrap mb-90 flex-wrap d-flex justify-content-between align-items-center">
                          <div className="project-details-1-info">
                            <span>Client</span>
                            <h4>{activeSlide.client}</h4>
                          </div>
                          <div className="project-details-1-info">
                            <span>Date</span>
                            <h4>October {"'2024"}</h4>
                          </div>
                          <div className="project-details-1-info">
                            <span>Services</span>
                            <h4>{activeSlide.subtitle}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="project-details-1-title-box pb-50">
                          <span className="project-details-1-subtitle">
                            <i>01</i>Shooting
                          </span>
                          <h4 className="project-details-1-title">
                            Perspective
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Ultrices
                            malesuada sed volutpat elit cum. Viverra dolor
                            maecenas amet dui.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
