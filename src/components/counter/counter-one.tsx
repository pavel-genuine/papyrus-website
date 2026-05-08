import React from "react";
import Image, { StaticImageData } from "next/image";
import CounterItem from "./counter-item";

// images
import marque_1 from "@/assets/img/inner-about/clients/Picture3.png";
import marque_2 from "@/assets/img/inner-about/clients/Picture4.png";
import marque_3 from "@/assets/img/inner-about/clients/Picture5.png";
import marque_4 from "@/assets/img/inner-about/clients/Picture6.png";
import marque_5 from "@/assets/img/inner-about/clients/Picture7.png";
import marque_6 from "@/assets/img/inner-about/clients/Picture8.png";
// import marque_7 from "@/assets/img/inner-about/clients/Picture9.png";
import marque_8 from "@/assets/img/inner-about/clients/Picture10.png";
import marque_9 from "@/assets/img/inner-about/clients/Picture11.png";
import marque_10 from "@/assets/img/inner-about/clients/Picture12.png";
import marque_11 from "@/assets/img/inner-about/clients/Picture13.jpg";
import marque_12 from "@/assets/img/inner-about/clients/Picture14.jpg";
import marque_13 from "@/assets/img/inner-about/clients/Picture15.jpg";

const images1 = [marque_1, marque_2, marque_3, marque_4, marque_5, marque_6];
const images2 = [
  marque_8,
  marque_9,
  marque_10,
  marque_11,
  marque_12,
  marque_13,
];

function MarqueImage({ src }: { src: StaticImageData }) {
  return (
    <Image
      src={src}
      alt="marque-img"
      style={{ height: "450px", width: "450px" }}
    />
  );
}
export default function CounterOne() {
  return (
    <div className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center">
      <div className="img-marq slide-funfact-overlay">
        <div className="middle-shadow">
          <span></span>
        </div>
        <div className="slide-img-left">
          <div className="box">
            {/* 2. Map through the array */}
            {images1.map((img, index) => (
              <MarqueImage key={index} src={img} />
            ))}
          </div>
          <div className="box">
            {/* 2. Map through the array */}
            {images2.map((img, index) => (
              <MarqueImage key={index} src={img} />
            ))}
          </div>
        </div>
        <div className="slide-img-right">
          <div className="box">
            {/* 2. Map through the array */}
            {images1.map((img, index) => (
              <MarqueImage key={index} src={img} />
            ))}
          </div>
          <div className="box">
            {/* 2. Map through the array */}
            {images2.map((img, index) => (
              <MarqueImage key={index} src={img} />
            ))}
          </div>
        </div>
      </div>
      <div className="slide-funfact-wrap">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-4 mb-30">
                {/* <div className="slide-funfact-item text-center">
                  <h4>
                    <CounterItem min={0} max={235} />+
                  </h4>
                  <span>Projects Finished</span>
                </div> */}
              </div>
              <div className="col-xl-8 col-lg-8 col-md-4 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4>
                    BRANDS <br /> WE SERVED
                  </h4>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 mb-30">
                {/* <div className="slide-funfact-item text-center">
                  <h4>
                    <CounterItem min={0} max={140} />+
                  </h4>
                  <span>Clients Worldwide</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
