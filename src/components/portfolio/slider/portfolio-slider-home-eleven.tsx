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
import { Dots } from "@/components/svg";

import Link from "next/link";
import Social from "@/components/social/social";

const slider_data = [
  {
    id: 1,
    subtitle: " Branding & Marketing ",
    title: "Top Paddock",
    youtubeUrl: "https://www.youtube.com/embed/Nhvi0TvxS6E?si=RqIYHqo9olg0TYwl",
    description: "A beautiful UI and web design project.",
    client: "Akij Dairy",
    year: "2024",
  },
  {
    id: 2,
    subtitle: " Branding & Marketing ",
    title: "Band Some",
    youtubeUrl: "https://www.youtube.com/embed/F2S30xmksIw?si=AvvLMPz47Yx1wT78",
    description: "Modern branding and web experience.",
    client: "Mr. White",
    year: "2024",
  },
  {
    id: 3,
    subtitle: " Branding & Marketing ",
    title: "Lune Lab",
    youtubeUrl: "https://www.youtube.com/embed/_PUuZs4LXXM?si=NRJqLv7tjuEOz69e",
    description: "Creative lab portfolio showcase.",
    client: "Bashundhara Spice",
    year: "2023",
  },
  {
    id: 4,
    subtitle: " Branding & Marketing ",
    title: "Park 108 Nyc",
    youtubeUrl: "https://www.youtube.com/embed/KDuOZZTydNI?si=PRZselveXcwwXWG_",
    description: "Luxury real estate digital experience.",
    client: "Bashundhara LPG",
    year: "2023",
  },
];

const slider_images = [showcase_1, showcase_2, showcase_3, showcase_4];

function getEmbedUrl(youtubeUrl: string): string {
  try {
    const url = new URL(youtubeUrl);
    let videoId = "";
    if (url.hostname.includes("youtu.be")) {
      videoId = url.pathname.slice(1);
    } else {
      videoId = url.searchParams.get("v") ?? "";
    }
    // Use youtube-nocookie.com instead of youtube.com
    // return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    return youtubeUrl;
  } catch {
    return "";
  }
}

// Handles WebGL transition — called on every slide change
function triggerWebGLTransition(webGL: any, realIndex: number) {
  if (!webGL || webGL.isRunning) return;
  webGL.isRunning = true;

  // Update active class on slide-wrap divs so WebGL knows current slide
  const triggerSlides = document.getElementById("trigger-slides");
  if (triggerSlides) {
    const allSlideWraps = triggerSlides.querySelectorAll(".slide-wrap");
    allSlideWraps.forEach((el) => {
      el.classList.remove("active");
    });
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

export default function PortfolioSliderHomeEleven() {
  // CORRECT — default to 0, update on client
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const webGLContainerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  const webGLRef = useRef<any>(null);
  const activeSlideRef = useRef<(typeof slider_data)[0] | null>(null);
  const [activeSlide, setActiveSlide] = useState<
    (typeof slider_data)[0] | null
  >(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const handleOpen = (item: (typeof slider_data)[0]) => {
    activeSlideRef.current = item;
    setActiveSlide(item);
    swiperRef.current?.autoplay?.stop();
  };

  const handleClose = () => {
    activeSlideRef.current = null;
    setActiveSlide(null);
    swiperRef.current?.autoplay?.start();
  };

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

  return (
    <>
      <div id="port-showcase-slider-main">
        <div className="port-showcase-slider-spaces p-relative">
          <div
            className="port-showcase-slider-wrap tp-slider-parallax fix"
            id="showcase-slider-holder"
            data-pattern-img="/assets/img/webgl/1.jpg"
          >
            {/* 
              Click on this container:
              - isTrusted false = programmatic/jQuery click → ignored for modal
              - isTrusted true = real user click → open modal
              - clicks on navigation/pagination → ignored via closest() check
            */}
            <div
              className="swiper-container parallax-slider-active p-relative"
              id="showcase-slider"
              data-cursor={`<img style='scale:2; filter: grayscale(100%);' src="/assets/img/inner-project/showcase/play-video.jpg" alt="inst-img"/>`}
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
                // Replaced slideNextTransitionStart/slidePrevTransitionStart
                // with onSlideChange to directly drive WebGL — no jQuery needed
                onSlideChange={(swiper) => {
                  triggerWebGLTransition(webGLRef.current, swiper.realIndex);
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                id="trigger-slides"
              >
                {slider_data.map((item, i) => (
                  <SwiperSlide key={item.id}>
                    {/* 
                      slide-wrap must stay — WebGL uses it to track active slide.
                      No onClick here, parent container handles clicks.
                    */}
                    <div
                      className={`slide-wrap${i === 0 ? " active" : ""}`}
                      data-slide={i}
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-8">
                          <div className="port-showcase-slider-item">
                            <div className="port-showcase-slider-content">
                              <span className="port-showcase-slider-subtitle" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
              <div className="ratio ratio-16x9 " style={{ overflow: "hidden" }}>
                <iframe
                  // className="banner-video"
                  src={getEmbedUrl(activeSlide.youtubeUrl)}
                  title={activeSlide.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    border: "none",
                    borderRadius: "10px",
                    width: width > 768 ? "97vw" : "90vw",
                    height: width > 768 ? "95vh" : "40vh",
                    margin: "20px",
                  }}
                />
              </div>
              <div className=" z-index-9">
                <div className="container">
                  <div className="project-details-video-style">
                    <div className="row align-items-start">
                      <div className="col-xl-12">
                        <div className="project-details-1-info-wrap mb-90 flex-wrap d-flex justify-content-between align-items-center">
                          <div className="project-details-1-info">
                            <span>Client</span>
                            <h4>{activeSlide?.client}</h4>
                          </div>
                          <div className="project-details-1-info">
                            <span>Date</span>
                            <h4>October {"'2024"}</h4>
                          </div>
                          <div className="project-details-1-info">
                            <span>Services</span>
                            <h4>{activeSlide?.subtitle}</h4>
                          </div>
                          {/* <div className="project-details-1-info">
                            <span>Share</span>
                            <div className="project-details-2-social">
                              <Social />
                            </div>
                          </div> */}
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
                            maecenas amet dui. Netus aliquet nunc netus cras eu
                            eget erat risus. Ipsum ac imperdiet urna nunc.
                            Rutrum lorem integer. Express the human touch and
                            the artisanal approach that are central to the brand
                            and ensure client project will be both totally
                            unique and exceptionally well built. Present the
                            huge selection of styles,{" "}
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
