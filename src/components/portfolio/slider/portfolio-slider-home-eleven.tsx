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
// NOTE: ?si= tracking params removed to prevent YouTube embed rejections.
// Clean /embed/ URLs are more reliable across all browsers & security contexts.
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

  // FIX: iframeReady delays iframe mount until modal animation finishes.
  // This prevents the intermittent YouTube CORS/frame rejection caused by
  // the iframe mounting before the modal is fully visible/stable.
  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  // ── Modal Open ──────────────────────────────────────────────────────────────
  const handleOpen = (item: (typeof slider_data)[0]) => {
    activeSlideRef.current = item;
    setActiveSlide(item);
    swiperRef.current?.autoplay?.stop();

    // Wait for Bootstrap modal fade-in animation (~300ms) to complete
    // before mounting the iframe. This eliminates the race condition that
    // causes YouTube to intermittently reject the embed request.
    setTimeout(() => setIframeReady(true), 400);
  };

  // ── Modal Close ─────────────────────────────────────────────────────────────
  const handleClose = () => {
    activeSlideRef.current = null;
    setActiveSlide(null);
    // Reset iframeReady so next open starts fresh (also stops video playback
    // by unmounting the iframe element entirely)
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

    return () => {
      webGL.stop();
    };
  }, []);

  // ── Build iframe src with autoplay + origin ─────────────────────────────────
  // The `origin` param tells YouTube which domain is embedding the video,
  // which resolves the CORS / unsafe-frame-load console error.
  const buildIframeSrc = (baseUrl: string) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    return `${baseUrl}?autoplay=1&origin=${origin}`;
  };

  return (
    <>
      <style jsx>{`
        .video-play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .play-icon-circle {
          width: 70px;
          height: 70px;
          background-color: rgba(247, 148, 29, 0.85);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
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

        /* ── Loading spinner shown while iframe is not yet ready ── */
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
              {/* Play icon overlay */}
              <div className="video-play-overlay">
                <div className="play-icon-circle">
                  <i
                    className="fa-solid fa-play"
                    style={{ marginLeft: "5px" }}
                  ></i>
                </div>
              </div>

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

        {/* WebGL canvas */}
        <div
          id="canvas-slider"
          className="canvas-slider"
          ref={webGLContainerRef}
        >
          {slider_images.map((imgSrc, index) => (
            <div key={index} className="slider-img" data-slide={index}>
              <Image className="slide-img" src={imgSrc} alt="showcase-img" />
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
            <div className="bg-dark">
              <div className="ratio ratio-16x9" style={{ overflow: "hidden" }}>
                {iframeReady ? (
                  // FIX: iframe only mounts after 400ms delay (see handleOpen).
                  // - No ?si= param: cleaner URL, avoids YouTube tracking rejections.
                  // - autoplay=1: starts video immediately when modal opens.
                  // - origin=...: tells YouTube the embedding domain, fixes CORS error.
                  // - web-share in allow: required for newer YouTube embed policy.
                  // - Unmounting on close (iframeReady=false) also stops audio/video.
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
                  // Shown for the 400ms while we wait for the modal to settle
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
