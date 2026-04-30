"use client";
import React, { useEffect, useState } from "react";
import BackToTop from "@/components/back-to-top";
import ThemeSetting from "@/components/theme-setting";
import Preloader from "./preloader/Preloader";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min");
}

interface WrapperProps {
  children: React.ReactNode;
  showBackToTop?: boolean;
}

const Wrapper = ({ children, showBackToTop = true }: WrapperProps) => {
  //  Preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {" "}
      isLoading ? <Preloader /> :{" "}
      <React.Fragment>
        {children}
        {showBackToTop && <BackToTop />}
        {/* <ThemeSetting /> */}
      </React.Fragment>
    </>
  );
};

export default Wrapper;
