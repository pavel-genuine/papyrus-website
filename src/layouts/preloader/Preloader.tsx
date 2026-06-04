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
        delay: 3,
      });

      tl.to([leftHalf.current, rightHalf.current], {
        duration: 3,
        ease: "expo.inOut",
        xPercent: (index) => (index === 0 ? -100 : 100),
      });

      tl.to(container.current, { opacity: 0, duration: 0.4 }, "-=0.4");
    },
    { scope: container },
  );

  if (isDone) return null;

  const halfStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "100vh",
    // FIX 1: পুরো ব্যাকগ্রাউন্ড সলিড ব্ল্যাক রাখা হয়েছে যাতে হোমপেজ একদমই না দেখা যায়
    backgroundColor: "black",
    overflow: "hidden",
    willChange: "transform",
    // FIX 2: ভিডিওটিকে স্ক্রিনের একদম মাঝখানে (Center) লক করার জন্য Flexbox ব্যবহার
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const videoStyle: React.CSSProperties = {
    width: "100vw",
    height: "auto",
    objectFit: "contain", // ভিডিও ক্রপ বা শ্রিন্ক হওয়া আটকাবে
  };

  return (
    <div
      ref={container}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        backgroundColor: "transparent",
      }}
    >
      {/* Left Half */}
      <div
        ref={leftHalf}
        style={{ ...halfStyle, left: 0, clipPath: "inset(0 50% 0 0)" }}
      >
        <video autoPlay muted loop playsInline style={videoStyle}>
          <source src="/assets/video/loader.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Right Half */}
      <div
        ref={rightHalf}
        style={{ ...halfStyle, left: 0, clipPath: "inset(0 0 0 50%)" }}
      >
        <video autoPlay muted loop playsInline style={videoStyle}>
          <source src="/assets/video/loader.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Preloader;
