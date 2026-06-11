import React, { useEffect } from "react";
import { UpArrow } from "../svg";
import Image from "next/image";
import Link from "next/link";
import { useIsotop } from "@/hooks/use-isotop";

type IProps = {
  style_2?: boolean;
  portfolio_data: Array<{
    id?: any;
    src?: any;
    mediaType?: any;
  }>;
};

export default function PortfolioGridFourColArea({ portfolio_data }: IProps) {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  return (
    <div className="pm-project-masonary-area">
      <div className="container container-1500">
        <div className="row gx-0 grid-2" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className="col-xl-3 col-lg-3 col-md-6 col-6 grid-item"
            >
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor m-2">
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
                      cursor: "pointer",
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
                  <Link href="#" className="cursor-hide">
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
                          alt={item.src}
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
                          alt={item.src}
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
    </div>
  );
}
