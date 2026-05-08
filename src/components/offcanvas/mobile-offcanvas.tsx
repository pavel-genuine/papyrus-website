import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube } from "../svg";

// images
import logo from "@/assets/img/logo/logo.png";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";
import Link from "next/link";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({
  openOffcanvas,
  setOpenOffcanvas,
}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="#">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p> */}
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-gallery">
              {/* <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <Link href="#">
                        <Image style={{ width: "100%", height: "auto" }} src={item} alt="gallery-img" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
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
                </li>
                <li>
                  <Link href="mailto:info@papyrus.agency">
                    info@papyrus.agency
                  </Link>
                </li>
                <li>
                  <Link href="mailto:musfiqurpapyrusimc@gmail.com">
                    musfiqurpapyrusimc@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.google.com/maps?ll=23.79026,90.40099&z=17&t=m&hl=en&gl=BD&mapclient=embed&cid=5650192237032927148"
                    target="_blank"
                  >
                    House 31 (Level 9), Road 4, Block F, Banani, Dhaka 1213.
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <Link href="#">
                    <InstagramTwo />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Dribble />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    {" "}
                    <Behance />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Youtube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
