import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  const container = useRef<HTMLDivElement>(null);
  const leftSide = useRef<HTMLDivElement>(null);
  const rightSide = useRef<HTMLDivElement>(null);

  const [isDone, setIsDone] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => setIsDone(true),
        delay: 2, // How long the video plays before splitting
      });

      tl.to([leftSide.current, rightSide.current], {
        xPercent: (i) => (i === 0 ? -100 : 100),
        duration: 1.6,
        ease: "expo.inOut",
      });
    },
    { scope: container },
  );

  if (isDone) return null;

  const panelStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "black", // Ensures no gaps
  };

  return (
    <div
      ref={container}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "transparent", // THIS MUST BE TRANSPARENT
        pointerEvents: "none",
      }}
    >
      {/* LEFT HALF CONTAINER */}
      <div
        ref={leftSide}
        style={{ ...panelStyle, clipPath: "inset(0 50% 0 0)" }}
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

      {/* RIGHT HALF CONTAINER */}
      <div
        ref={rightSide}
        style={{ ...panelStyle, clipPath: "inset(0 0 0 50%)" }}
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
