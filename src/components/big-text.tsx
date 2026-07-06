import Link from "next/link";
import React, { useEffect, useState } from "react";

// type
type IProps = {
  cls?: string;
};

export default function BigText({ cls = "" }: IProps) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });
  return (
    <div>
      <div
        style={{ borderTop: "1px solid #414141a4" }}
        className={`sv-big-text-area pt-50 pb-50  ${cls}`}
      >
        <div className="container container-1530 text-center">
          <div className="sv-small-text-box d-flex justify-content-between">
            {/* <span>DIGITAL DESIGN EXPERIENCE</span>
          <span>CREATIVE STUDIO</span> */}
          </div>
          <div className="sv-big-text-box">
            <h4
              style={{
                // scale: width > 768 ? "70%" : "80%",
                fontSize: "100px",
                fontWeight: "700",
              }}
              className="sv-big-text tp-char-animation"
            >
              <Link href="/lets-connect">Let's Connect</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
