import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  // Define types for the refs to satisfy TypeScript
  const container = useRef<HTMLDivElement>(null);
  const topHalf = useRef<HTMLDivElement>(null);
  const bottomHalf = useRef<HTMLDivElement>(null);

  const [isDone, setIsDone] = useState(false);

  useGSAP(
    () => {
      // Safety check to ensure refs are attached
      if (!topHalf.current || !bottomHalf.current) return;

      const tl = gsap.timeline({
        onComplete: () => setIsDone(true),
        delay: 2,
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
      );
    },
    { scope: container },
  );

  if (isDone) return null;

  const halfStyle: React.CSSProperties = {
    position: "fixed",
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
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
