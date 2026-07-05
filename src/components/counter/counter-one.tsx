import Image from "next/image";
import React, { useEffect, useState } from "react";

const totalImages = 15;
const folderPath = `/assets/img/home-01/papyrus-client`;

const allImagePaths = Array.from({ length: totalImages }, (_, index) => {
  const fileNumber = index + 1;
  return `${folderPath}/client (${fileNumber}).png`;
});

const allImagePaths2 = Array.from({ length: totalImages }, (_, index) => {
  const fileNumber = index + 1;
  return `${folderPath}/client (${fileNumber}).jpg`;
});

const images1 = allImagePaths;
const images2 = allImagePaths2;

// লোগোর সাইজ বড় করা হয়েছে যাতে থিমের 3D ইফেক্টেও লোগো স্পষ্ট থাকে
function MarqueImage({
  src,
  alt,
  isMobile,
}: {
  src: string;
  alt: string;
  isMobile: boolean;
}) {
  // আগের চেয়ে উইডথ ও হাইট বাড়িয়ে দেওয়া হলো
  const width = isMobile ? 220 : 450;
  const height = isMobile ? 140 : 280;

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        margin: isMobile ? "0 15px" : "0 40px", // লোগোগুলোর মাঝের গ্যাপ বাড়ানো হলো
        display: "inline-block",
        flexShrink: 0,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 220px, 450px"
        style={{
          objectFit: "contain", // লোগোর আসল অনুপাত (aspect ratio) ঠিক রাখবে
        }}
        priority
      />
    </div>
  );
}

export default function CounterOne() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768 && width > 0;

  return (
    <div className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center">
      {/* ব্যাকগ্রাউন্ড ইমেজেস */}
      <div
        className="img-marq slide-funfact-overlay"
        style={{ overflow: "hidden", width: "100%" }}
      >
        <div className="middle-shadow">
          <span></span>
        </div>

        {/* LEFT MOVING MARQUEE */}
        <div className="slide-img-left">
          <div
            className="box"
            style={{ display: "flex", alignItems: "center" }}
          >
            {images1.map((src, index) => (
              <MarqueImage
                key={`left-box1-${index}`}
                src={src}
                alt={`brand-left-1-${index}`}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        {/* RIGHT MOVING MARQUEE */}
        <div
          className="slide-img-right"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: isMobile ? "10px" : "20px",
          }}
        >
          <div
            className="box"
            style={{ display: "flex", alignItems: "center" }}
          >
            {images2.map((src, index) => (
              <MarqueImage
                key={`right-box1-${index}`}
                src={src}
                alt={`brand-right-1-${index}`}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>

      {/* মাঝখানের টেক্সট */}
      <div
        className="slide-funfact-wrap"
        style={{ zIndex: 5, position: "absolute" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <div className="slide-funfact-item">
                <h4
                  style={{
                    fontWeight: width > 768 ? "500" : "200",
                    fontSize: width > 768 ? "80px" : "32px",
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  BRANDS <br /> WE SERVED
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
