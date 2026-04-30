import React from "react";
import { UpArrow } from "@/components/svg";
import Link from "next/link";

export default function FooterFive() {
  return (
    <footer>
      <div className="tp-footer-5-area black-bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-footer-5-content-wrap">
                <div className="tp-footer-5-title-box">
                  <span className="tp-footer-5-subtitle">
                    Want to <br /> Start a Project?
                  </span>
                  <h4 className="tp-footer-5-title tp_reveal_anim-2 footer-big-text">
                    {"Let's"} Talk
                  </h4>
                </div>
                <div className="tp-footer-5-info d-flex align-items-center justify-content-start justify-content-md-end">
                  <Link
                    className="tp-footer-5-mail"
                    href="mailto:info@papyrus.agency"
                  >
                    info@papyrus.agency
                  </Link>
                  <Link className="tp-footer-5-link" href="#">
                    <UpArrow clr="#19191A" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer area end */}
    </footer>
  );
}
