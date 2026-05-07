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
                <Link href="/lets-connect" className="tp-footer-5-title-box">
                  <span className="tp-footer-5-subtitle">Let’s Connect</span>
                  <h6 className="tp-footer-5-title tp_reveal_anim-2 footer-big-text">
                    Speak. We Spark.
                  </h6>
                </Link>
                <div className="mt-20 tp-footer-5-info d-flex align-items-center justify-content-start justify-content-md-end">
                  <div>
                    <Link
                      className="tp-footer-5-mail"
                      href="mailto:info@papyrus.agency"
                    >
                      info@papyrus.agency
                    </Link>{" "}
                    <br />
                    <br />
                    <Link
                      className="tp-footer-5-mail"
                      href="tel:+880 1313713201"
                    >
                      +880 1313713201
                    </Link>{" "}
                  </div>

                  <Link className="tp-footer-5-link" href="/lets-connect">
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
