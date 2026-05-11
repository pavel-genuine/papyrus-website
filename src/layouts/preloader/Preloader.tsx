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
        delay: 1.5,
      });

      // Animation for the split
      tl.to([leftHalf.current, rightHalf.current], {
        duration: 1.6,
        ease: "expo.inOut",
        // We use function-based values to move them in opposite directions
        xPercent: (index) => (index === 0 ? -100 : 100),
      });

      // OPTIONAL: Smoothly fade out the container at the very end
      // to ensure no "flicker" when the component is unmounted
      tl.to(container.current, { opacity: 0, duration: 0.4 }, "-=0.4");
    },
    { scope: container },
  );

  if (isDone) return null;

  const halfStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "black", // Keep this black so the video area looks solid
    overflow: "hidden",
    willChange: "transform", // Optimizes performance for the slide
  };

  return (
    <div
      ref={container}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none", // Allows clicking "through" to the site during animation
        backgroundColor: "transparent", // Ensure the main container is clear
      }}
    >
      {/* Left Half */}
      <div
        ref={leftHalf}
        style={{ ...halfStyle, left: 0, clipPath: "inset(0 50% 0 0)" }}
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

      {/* Right Half */}
      <div
        ref={rightHalf}
        style={{ ...halfStyle, left: 0, clipPath: "inset(0 0 0 50%)" }}
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
