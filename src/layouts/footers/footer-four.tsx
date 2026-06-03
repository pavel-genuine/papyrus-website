import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/logo/logo-white.png";
import { RightArrow, SvgBgSm } from "@/components/svg";
import Link from "next/link";

export default function FooterFour() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <footer>
      <div
        style={{ borderTop: "1px solid #414141a4" }}
        className="tp-footer-3-area dark-bg pt-70"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Website map</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">Our Story</Link>
                      </li>
                      <li>
                        <Link href="/our-canvas">Our Canvas</Link>
                      </li>
                      <li>
                        <Link href="/our-areas">Our Areas</Link>
                      </li>

                      <li>
                        <Link href="/lets-connect">Let's Connect</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr="#19191A" />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm />
                      </span>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              style={{
                borderLeft: "1px solid #414141a4",
                borderRight: "1px solid #414141a4",
                paddingRight: "50px",
              }}
              className="col-xl-4 col-lg-6 col-md-6 mb-60"
            >
              <div className="tp-footer-3-widget text-md-center footer-col-2-2">
                <div className="tp-footer-3-logo-box">
                  {/* <p className="mb-100">
                    Award Winning <br />
                    IMC
                  </p> */}
                  <Link
                    style={{ scale: width > 768 ? "2" : "1" }}
                    className="tp-footer-3-logo p-relative mt-100"
                    href="/"
                  >
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    {new Date().getFullYear()} Papyrus IMC <br /> © All rights
                    reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-2-2">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <Link
                        href="https://www.google.com/maps?ll=23.79026,90.40099&z=17&t=m&hl=en&gl=BD&mapclient=embed&cid=5650192237032927148"
                        target="_blank"
                      >
                        House 31 (Level 9), Road 4, Block F, Banani, Dhaka 1213.
                      </Link>
                    </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <Link href="tel:+880 1313713201">+880 1313713201</Link>
                    </span>{" "}
                    <br />
                    <span>
                      <Link href="tel:+880 1313713190">+880 1313713190</Link>
                    </span>
                    <br />
                    <span>
                      <Link href="tel:+880 1986-661166">+880 1986-661166</Link>
                    </span>
                    <br />
                    <span>
                      {" "}
                      <Link href="mailto:info@papyrus.agency">
                        info@papyrus.agency
                      </Link>
                    </span>
                    <br />
                    <span>
                      {" "}
                      <Link href="mailto:musfiqurpapyrusimc@gmail.com">
                        musfiqurpapyrusimc@gmail.com
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="tp-footer-3-widget mb-100">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <Link
                      href="https://www.facebook.com/papyrusbd"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>

                    <Link
                      href=" https://www.youtube.com/@PapyrusIMC "
                      target="_blank"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/company/papyrus-imc/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
