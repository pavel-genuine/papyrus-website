import Image from "next/image";
import CounterItem from "./counter-item";
import React, { useEffect, useRef, useState } from "react";
// Adjust these to match your actual file ranges/counts
const totalImages = 15;
const folderPath = `/assets/img/home-01/papyrus-client`; // Points directly to the public/img/marquee/ folder

// 1. Generate an array of numbers from 3 to 102 (or whatever your naming starts at)
const allImagePaths = Array.from({ length: totalImages }, (_, index) => {
  const fileNumber = index + 1; // Starts at Picture3.png

  return `${folderPath}/client (${fileNumber}).png`;
});
const allImagePaths2 = Array.from({ length: totalImages }, (_, index) => {
  const fileNumber = index + 1; // Starts at Picture3.png

  return `${folderPath}/client (${fileNumber}).jpg`;
});

// 2. Split your 100 images evenly into two marquee arrays

const images1 = allImagePaths;
const images2 = allImagePaths2;

// Updated MarqueImage component accepting string sources from the public folder
function MarqueImage({ src, alt }: { src: string; alt: string }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });
  return (
    <Image
      src={src}
      alt={alt}
      width={450} // Next.js Image requires width/height props for remote/public string paths
      height={450}
      style={{
        height: width > 768 ? "500px" : "450px",
        width: width > 768 ? "auto" : "450px",
        objectFit: "fill",
      }}
    />
  );
}

export default function CounterOne() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });
  return (
    <div className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center">
      <div className="img-marq slide-funfact-overlay">
        <div className="middle-shadow ">
          <span></span>
        </div>

        {/* LEFT MOVING MARQUEE */}
        <div className="slide-img-left">
          <div className="box">
            {images1.map((src, index) => (
              <MarqueImage
                key={`left-box1-${index}`}
                src={`${src}`}
                alt={`brand-left-1-${index}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT MOVING MARQUEE */}
        <div className="slide-img-right">
          <div className="box">
            {images2.map((src, index) => (
              <MarqueImage
                key={`right-box1-${index}`}
                src={src}
                alt={`brand-right-1-${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="slide-funfact-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-4 mb-30"></div>
            <div className="col-xl-8 col-lg-8 col-md-4 mb-30">
              <div className="slide-funfact-item text-center">
                <h4
                  style={{
                    fontWeight: width > 768 ? "500" : "200",
                    fontSize: width > 768 ? "80px" : "30px",
                  }}
                >
                  BRANDS <br /> WE SERVED
                </h4>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 mb-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
