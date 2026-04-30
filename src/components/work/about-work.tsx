import React from "react";
import Image from "next/image";
import shape from "@/assets/img/inner-about/about/shape-1.png";

const work_data = [
  {
    id: 1,
    title: "LOGO",
    subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 2,
    title: "PACKAGING",
    subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 3,
    title: "BROCHURE & CATALOGUE",
    subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 4,
    title: "LEAFLET",
    subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 5,
    title: "BILL BOARD",
    subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 6,
    title: "PRESS AD",
    subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
];
export default function AboutWork() {
  return (
    <div className="ab-2-work-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="ab-2-work-title-box p-relative">
              <h4 className="ab-2-work-title tp_title_anim">
                Some Of Our <br /> Works
              </h4>

              <Image
                className="ab-2-work-shape d-none d-lg-block"
                src={shape}
                alt="shape"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            {work_data.map((item) => (
              <div key={item.id} className="ab-2-work-item tp_fade_bottom">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                      {item.subtitle}
                    </span>
                    <h4 className="sv-service-title">{item.title}</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
