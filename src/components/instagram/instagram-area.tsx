/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
// instagram images
import inst_1 from "@/assets/img/home-02/instagram/team (1).png";
import inst_2 from "@/assets/img/home-02/instagram/team (2).png";
import inst_3 from "@/assets/img/home-02/instagram/team (3).png";
import inst_4 from "@/assets/img/home-02/instagram/team (4).png";
import inst_5 from "@/assets/img/home-02/instagram/team (5).png";
import inst_6 from "@/assets/img/home-02/instagram/team (6).png";
import inst_7 from "@/assets/img/home-02/instagram/team (7).png";
import Link from "next/link";

export default function InstagramArea() {
  // instagram images
  const instagram_images = [
    { id: 1, img: inst_1 },
    { id: 2, img: inst_2 },
    { id: 3, img: inst_3 },
    { id: 4, img: inst_4 },
    { id: 5, img: inst_5 },
    { id: 6, img: inst_6 },
    { id: 7, img: inst_7 },
  ];

  return (
    <div style={{ position: "relative", height: "250vh", paddingTop: "550px" }}>
      <div className="tp-instagram-area tp-instagram-ptb text-center">
        <div className="tp-instagram-thumb-wrap p-relative">
          {instagram_images.map((item) => (
            <div
              key={item.id}
              className={`tp-instagram-thumb-inner-${item.id} d-none d-xl-block`}
            >
              <Image src={item.img} alt="inst-img" />
            </div>
          ))}

          <div className="tp-instagram-thumb">
            <img
              src="/assets/img/home-02/instagram/team (11).png"
              alt="inst-img"
            />
          </div>
          {/* <div className="tp-instagram-content-wrap text-start">
          <div className="tp-instagram-title-box">
            <span className="tp-instagram-subtitle">INSTAGRAM</span>
            <h4 className="tp-instagram-title">@likoagency</h4>
          </div>
          <div className="tp-instagram-content">
            <p>
              Become a part of our stories! <br /> Join the adventure.
            </p>
            <Link className="tp-btn-white background-black" href="#">
              Follow Us
              <span>
                <Leaf />
              </span>
            </Link>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
