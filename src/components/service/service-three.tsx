"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import Link from "next/link";
import Image from "next/image";

import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about-1.jpg";
import ab_2 from "@/assets/img/inner-about/about/about-3.jpg";
import ab_3 from "@/assets/img/inner-about/about/about-2.jpg";

// internal imports
import star_icon from "@/assets/img/home-04/service/sv-star-1.png";
import sv_1 from "@/assets/img/home-04/service/sv-icon-1.png";
import sv_2 from "@/assets/img/home-04/service/sv-icon-2.png";
import sv_3 from "@/assets/img/home-04/service/sv-icon-3.png";
import sv_4 from "@/assets/img/home-04/service/sv-icon-4.png";
import { Autoplay } from "swiper/modules";

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 4,
  loop: true,
  autoplay: true,
  spaceBetween: 60,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 4,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "576": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "0": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  modules: [Autoplay],
};
// service data
const service_data = [
  {
    id: 1,
    icon: sv_1,
    title: "Strategic Planning",
    subtitle: "01",
  },
  {
    id: 2,
    icon: sv_2,
    title: "Communication Planning",
    subtitle: "02",
  },
  {
    id: 3,
    icon: sv_3,
    title: "Advertising",
    subtitle: "03",
  },
  {
    id: 4,
    icon: sv_4,
    title: "Creative Designs",
    subtitle: "04",
  },
  {
    id: 5,
    icon: sv_1,
    title: "Audio Visual & Print Production",
    subtitle: "05",
  },
  {
    id: 6,
    icon: sv_2,
    title: "PR & Media planning and Buying",
    subtitle: "06",
  },
  {
    id: 7,
    icon: sv_3,
    title: "Activation",
    subtitle: "07",
  },
  {
    id: 8,
    icon: sv_4,
    title: "Event",
    subtitle: "08",
  },
  {
    id: 9,
    icon: sv_1,
    title: "Digital & Social Media Marketing",
    subtitle: "09",
  },
];
export default function ServiceThree() {
  return (
    <div className="ab-about-area ab-about-mt pt-60 pb-90 z-index-5">
      <div className="container container-1480">
        <div id="about-info" className="row">
          <div className="col-xxl-12 ">
            <div className="ab-about-content p-relative">
              <p className=" tp_fade_bottom">
                We are a creative studio that specializes in providing
                high-quality design and branding solutions to businesses and
                individuals. Our team is composed of talented designers,
                developers, and marketers.!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title"></h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        {service_data?.slice(0, 5)?.map((ser) => (
                          <Link
                            key={ser?.id}
                            href={`/our-areas#service-${ser.id}`}
                          >
                            <li style={{ fontSize: "25px" }}>{ser?.title}</li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        {service_data?.slice(5, 9)?.map((ser) => (
                          <Link
                            key={ser?.id}
                            href={`/our-areas#service-${ser.id}`}
                          >
                            <li style={{ fontSize: "25px" }}>{ser?.title}</li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
