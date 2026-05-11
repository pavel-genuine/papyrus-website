import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  const container = useRef();
  const topHalf = useRef();
  const bottomHalf = useRef();
  const [isDone, setIsDone] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => setIsDone(true), // Removes from DOM after animation
        delay: 2, // Wait 2 seconds before opening (or trigger based on your app logic)
      });

      tl.to(topHalf.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      }).to(
        bottomHalf.current,
        {
          yPercent: 100,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "<",
      ); // "<" makes them start at the same time
    },
    { scope: container },
  );

  if (isDone) return null;

  // Shared styles for the two halves
  const halfStyle = {
    position: "fixed",
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0303032b",
    overflow: "hidden",
  };

  return (
    <div ref={container} style={{ position: "fixed", inset: 0, zIndex: 9999 }}>
      {/* Top Half */}
      <div ref={topHalf} style={{ ...halfStyle, clipPath: "inset(0 0 50% 0)" }}>
        <video
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/video/loader.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Bottom Half */}
      <div
        ref={bottomHalf}
        style={{ ...halfStyle, clipPath: "inset(50% 0 0 0)" }}
      >
        <video
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/video/loader.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Preloader;
