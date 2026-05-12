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
      const tl = gsap.timeline({ onComplete: () => setIsDone(true), delay: 2 });
      tl.to([leftSide.current, rightSide.current], {
        xPercent: (i) => (i === 0 ? -100 : 100),
        duration: 1.8,
        ease: "expo.inOut",
      });
    },
    { scope: container },
  );

  if (isDone) return null;

  const videoElement = (
    <video
      style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      autoPlay
      muted
      loop
      playsInline
      onCanPlayThrough={(e) => e.currentTarget.play()} // Forces play as soon as cached
    >
      <source src="/assets/video/loader.mp4" type="video/mp4" />
    </video>
  );

  return (
    <div
      ref={container}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div
        ref={leftSide}
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          clipPath: "inset(0 50% 0 0)",
          backgroundColor: "black",
        }}
      >
        {videoElement}
      </div>
      <div
        ref={rightSide}
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          clipPath: "inset(0 0 0 50%)",
          backgroundColor: "black",
        }}
      >
        {videoElement}
      </div>
    </div>
  );
};

export default Preloader;
