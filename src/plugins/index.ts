const isBrowser = typeof window !== "undefined";

// ScrollTrigger
export const ScrollTrigger: any = isBrowser
  ? require("./gsap-scroll-trigger").default
  : null;

// ScrollSmoother
export const ScrollSmoother: any = isBrowser
  ? require("./gsap-scroll-smoother").default
  : null;

// SplitText
export const SplitText: any = isBrowser
  ? require("./gsap-split-text").default
  : null;

// cursorAnimation
export const cursorAnimation: any = isBrowser
  ? require("./tp-cursor").default
  : null;

// chroma
export const chroma: any = isBrowser ? require("./chroma.min").default : null;

// WebGL
export const WebGL: any = isBrowser ? require("./webgl").default : null;
