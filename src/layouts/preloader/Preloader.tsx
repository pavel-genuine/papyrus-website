import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  const container = useRef<HTMLDivElement>(null);
  const leftHalf = useRef<HTMLDivElement>(null);
  const rightHalf = useRef<HTMLDivElement>(null);

  const [isDone, setIsDone] = useState(false);

  useGSAP(
    () => {
      if (!leftHalf.current || !rightHalf.current) return;

      const tl = gsap.timeline({
        onComplete: () => setIsDone(true),
        delay: 2,
      });

      tl.to([leftHalf.current, rightHalf.current], {
        xPercent: (i) => (i === 0 ? -100 : 100),
        duration: 1.8,
        ease: "expo.inOut",
      });
    },
    { scope: container },
  );

  if (isDone) return null;

  const halfStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    width: "100vw",
    height: "100vh",
    // Ensure the video background is black so it looks solid
    backgroundColor: "black",
    overflow: "hidden",
    willChange: "transform",
  };

  return (
    <div
      ref={container}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        // CRITICAL: The wrapper must be transparent
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    >
      {/* Left Half */}
      <div
        ref={leftHalf}
        style={{ ...halfStyle, left: 0, clipPath: "inset(0 50% 0 0)" }}
      >
        <video
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            transform: "scale(1.01)",
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/video/loader.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Right Half */}
      <div
        ref={rightHalf}
        style={{ ...halfStyle, left: 0, clipPath: "inset(0 0 0 50%)" }}
      >
        <video
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            transform: "scale(1.01)",
          }}
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
