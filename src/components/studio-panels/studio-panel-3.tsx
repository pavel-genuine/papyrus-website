import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import shape from "@/assets/img/home-02/service/sv-shape-1.png";
import port_1 from "@/assets/img/home-12/portfolio/port-1.jpg";
import port_2 from "@/assets/img/home-12/portfolio/port-2.jpg";
import port_3 from "@/assets/img/home-12/portfolio/port-3.jpg";
import port_4 from "@/assets/img/home-12/portfolio/port-4.jpg";
import port_5 from "@/assets/img/home-12/portfolio/port-5.jpg";
import port_6 from "@/assets/img/home-12/portfolio/port-6.jpg";

const portfolio_data = [
  {
    id: 1,
    img: port_1,
    title: "Strategic Planning",
  },
  {
    id: 2,
    img: port_2,
    title: "Communication Planning",
  },
  {
    id: 3,
    img: port_3,
    title: "Advertising",
  },
  {
    id: 4,
    img: port_4,
    title: "Creative Designs",
  },
  {
    id: 5,
    img: port_5,
    title: "Audio Visual & Print Production",
  },
  {
    id: 6,
    img: port_6,
    title: "PR & Media planning and Buying",
  },
  {
    id: 7,
    img: port_4,
    title: "Activation",
  },
  {
    id: 8,
    img: port_6,
    title: "Event",
  },
  {
    id: 9,
    img: port_4,
    title: "Digital & Social Media Marketing",
  },
];

export default function StudioPanelThree() {
  return (
    <div className="panel-2 ">
      <div className="tp-studio-portfolio-area d-flex align-items-end  tp-studio-plr p-relative fix pt-180 pb-60">
        <div className="tp-studio-portfolio-shape d-none d-md-block">
          <Image src={shape} alt="shape" style={{ height: "auto" }} />
        </div>
        <div className="container container-1630">
          <div className="row align-items-center counter-row">
            <div className="col-xl-4 col-lg-6">
              <div className="tp-studio-portfolio-title-box">
                <h4 className="tp-studio-portfolio-title">Services :</h4>
                <p>
                  The list is far from exhaustive we all have our own
                  predictions and predilections.
                </p>
                <Link className="tp-btn-black-sm" href="/">
                  View More
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 ">
              <div className="tp-studio-line-wrap p-relative">
                <div className="tp-studio-portfolio-wrap p-relative tp-marker-tab">
                  {portfolio_data.map((item) => (
                    <div
                      key={item.id}
                      className="tp-studio-portfolio-item p-relative"
                    >
                      <div className="tp-studio-portfolio-inner-title-box">
                        <h4 className="tp-studio-portfolio-inner-title">
                          <Link href="/">{item.title}</Link>
                          <span>{item.id < 9 ? `0${item.id}` : item.id}</span>
                        </h4>
                      </div>
                      <div className="tp-studio-portfolio-img">
                        <Image src={item.img} alt="portfolio-img" />
                      </div>
                    </div>
                  ))}
                </div>
                <span id="myline"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            <div className="tp-project-full-img-wrap p-relative fix">
              <div
                className="tp-project-full-img"
                data-speed="auto"
                style={{
                  backgroundImage:
                    "url(/assets/img/inner-service/hero/hero-1-2.jpg)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
