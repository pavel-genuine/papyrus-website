"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsotop } from "@/hooks/use-isotop";
import Modal from "react-bootstrap/Modal";

type IProps = {
  style_2?: boolean;
  portfolio_data: Array<{
    id?: any;
    src?: any;
    mediaType?: any;
    title?: string;
    youtubeUrl?: string;
  }>;
};

const getEmbedUrl = (url: any) => {
  if (!url || typeof url !== "string") return "";
  try {
    let videoId = "";
    const trimmedUrl = url.trim();
    if (trimmedUrl.includes("watch?v=")) {
      videoId = trimmedUrl.split("watch?v=")[1]?.split("&")[0] || "";
    } else if (trimmedUrl.includes("youtu.be/")) {
      videoId = trimmedUrl.split("youtu.be/")[1]?.split(/[?#]/)[0] || "";
    } else if (trimmedUrl.includes("/shorts/")) {
      videoId = trimmedUrl.split("/shorts/")[1]?.split(/[?#]/)[0] || "";
    } else if (trimmedUrl.includes("/embed/")) {
      return trimmedUrl;
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : trimmedUrl;
  } catch (error) {
    console.error("YouTube URL parsing error:", error);
    return "";
  }
};

export default function PortfolioGridFourColArea({ portfolio_data }: IProps) {
  const { initIsotop, isotopContainer } = useIsotop();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<any>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    initIsotop();
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initIsotop]);

  const handleOpenModal = (e: React.MouseEvent, item: any) => {
    e.preventDefault();
    setModalItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalItem(null);
  };

  return (
    <div className="pm-project-masonary-area">
      <div className="container container-1500">
        <div className="row gx-0 grid-2" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className="col-xl-3 col-lg-3 col-md-6 col-6 grid-item"
            >
              <div
                className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor m-2"
                onClick={(e) => handleOpenModal(e, item)}
                style={{ cursor: "pointer" }}
              >
                {item.mediaType === "video" ? (
                  <div
                    className="portfolio-video-wrapper"
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "300px",
                      overflow: "hidden",
                      borderRadius: "5px",
                      aspectRatio: "1/1",
                      background: "#000",
                    }}
                  >
                    <video
                      src={item?.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,0,0,0.2)",
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "24px" }}>▶</span>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="#"
                    className="cursor-hide"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div
                      style={{
                        width: "100%",
                        maxWidth: "300px",
                        height: "auto",
                        position: "relative",
                      }}
                    >
                      {typeof item.src === "string" &&
                      (item.src.startsWith("http") ||
                        item.src.startsWith("/")) ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          className="anim-zoomin"
                          src={item.src}
                          alt="portfolio-thumb"
                          style={{
                            width: "100%",
                            maxWidth: "300px",
                            height: "auto",
                            objectFit: "fill",
                            borderRadius: "5px",
                          }}
                        />
                      ) : (
                        <Image
                          className="anim-zoomin"
                          src={item.src}
                          alt="portfolio-thumb"
                          width={750}
                          height={750}
                          style={{
                            width: "100%",
                            maxWidth: "300px",
                            height: "auto",
                            objectFit: "fill",
                            borderRadius: "5px",
                          }}
                        />
                      )}
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal Dynamic Handler ── */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        style={{ zIndex: 999999 }}
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          style={{
            background: "#1a1a1a",
            borderBottom: "1px solid #2e2e2e",
          }}
        ></Modal.Header>
        <Modal.Body
          style={{
            background: "#111",
            padding: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {modalItem?.mediaType === "video" ? (
            <video
              src={modalItem.src}
              controls
              autoPlay
              playsInline
              style={{
                width: "100%",
                maxHeight: "75vh",
                backgroundColor: "#000",
              }}
            />
          ) : modalItem?.mediaType === "youtube" ? (
            <iframe
              src={getEmbedUrl(modalItem?.youtubeUrl || modalItem?.src)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                border: "none",
                borderRadius: "10px",
                width: windowWidth > 768 ? "97vw" : "90vw",
                height: windowWidth > 768 ? "70vh" : "40vh",
                margin: "20px",
              }}
            />
          ) : (
            modalItem && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={modalItem.src}
                alt={modalItem?.title || "View"}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "75vh",
                  objectFit: "contain",
                }}
              />
            )
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
