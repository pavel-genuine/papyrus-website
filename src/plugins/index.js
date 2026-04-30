const isBrowser = typeof window !== "undefined";

// ScrollTrigger
export const ScrollTrigger = isBrowser
    ? require("./gsap-scroll-trigger").default
    : null;

// ScrollSmoother
export const ScrollSmoother = isBrowser
    ? require("./gsap-scroll-smoother").default
    : null;

// SplitText
export const SplitText = isBrowser
    ? require("./gsap-split-text").default
    : null;

// cursorAnimation
export const cursorAnimation = isBrowser
    ? require("./tp-cursor").default
    : null;

// chroma
export const chroma = isBrowser
    ? require("./chroma.min").default
    : null;

// WebGL
export const WebGL = isBrowser
    ? require("./webgl").default
    : null;