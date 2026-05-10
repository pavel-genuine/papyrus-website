"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import logo from "../../../public/assets/img/logo/logo.png";
import logobg from "../../../public/assets/img/logo/logoback.png";
import logoWhite from "../../../public/assets/img/logo/logo-white.png";
import useStickyHeader from "@/hooks/use-sticky-header";

const HeaderOne = () => {
  const { isSticky, headerRef, headerFullWidth } = useStickyHeader(20);
  const [openOffCanvas, setOpenOffCanvas] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="tp-header-height" ref={headerRef}>
        <div
          style={{
            backgroundImage: `url(${logobg.src})`,
            height: width > 768 ? "90px" : "80px",
            paddingTop: width < 768 ? "15px" : "0px",
          }}
          id="header-sticky"
          className={`tp-header-area tp-header-mob-space tp-transparent pl-60 pr-60 z-index-9 ${isSticky ? "header-sticky" : ""}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="tp-header-logo">
                  <Link className="logo-2" href="/">
                    <Image
                      style={{
                        width: "auto",
                        height: "auto",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                      }}
                      src={logoWhite}
                      alt="logo"
                      width={width > 768 ? 140 : 90}
                      height={width > 768 ? 90 : 60}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 d-none d-xl-block">
                <div className="tp-header-menu header-main-menu text-center">
                  <nav className="tp-main-menu-content">
                    {/* header menus */}
                    <HeaderMenus />
                    {/* header menus */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg col-6">
                <div className="tp-header-bar text-end">
                  <button
                    className="tp-offcanvas-open-btn"
                    onClick={() => setOpenOffCanvas(true)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffCanvas}
      />
      {/* off canvas */}
    </>
  );
};

export default HeaderOne;
