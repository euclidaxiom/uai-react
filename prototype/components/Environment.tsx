"use client";

import React, { forwardRef, useEffect, useRef } from "react";
import { ThemeContext } from "@uai-ui-react/app-context";
import Image from "next/image";
import "@uai-ui-react/prototype-themes";
import { defaultIcons } from "./DefaultIcons";

//     |\|\
//    /nn /\______
//   (__)\        |\
//        || |--| | \_
//        || |  | |
//  ///////////////////////////////////////////////////////////////////////////

//  ENVIRONMENT

interface Environment extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme: string;
  width?: number;
  aspectRatio?: string;
  xMarginPercentage?: number;
  yMarginPixels?: number;
}

const Environment = forwardRef<HTMLDivElement, Environment>(
  (
    {
      children,
      theme,
      width = 1357.65,
      aspectRatio = "2/1",
      xMarginPercentage = 6.6666666667,
      yMarginPixels = 128,
      ...props
    },
    ref
  ) => {
    const designCanvasRef = useRef<HTMLDivElement>(null);

    const calculateAndApplyScale = () => {
      if (!designCanvasRef.current) return;

      designCanvasRef.current.style.width = `${width}px`;
      designCanvasRef.current.style.aspectRatio = `${aspectRatio}`;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const height = width / 2;

      const xMargin = (xMarginPercentage / 100) * 2;
      const yMargin = yMarginPixels * 2;

      const xRenderSize = viewportWidth - viewportWidth * xMargin;
      const yRenderSize = viewportHeight - yMargin;

      const xScaleValue = xRenderSize / width;
      const yScaleValue = yRenderSize / height;

      if (height * xScaleValue > yRenderSize) {
        designCanvasRef.current.style.transform = `scale(${yScaleValue})`;
      } else {
        designCanvasRef.current.style.transform = `scale(${xScaleValue})`;
      }
    };

    useEffect(() => {
      const initialTimer = setTimeout(() => {
        calculateAndApplyScale();
      }, 300);

      window.addEventListener("resize", calculateAndApplyScale);

      return () => {
        clearTimeout(initialTimer);
        window.removeEventListener("resize", calculateAndApplyScale);
      };
    }, [width, aspectRatio, xMarginPercentage, yMarginPixels]);

    return (
      <ThemeContext.Provider
        value={{ theme: `${theme}`, defaultIcons: defaultIcons }}
      >
        <div
          className={`theme--${theme}`}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          ref={ref}
          {...props}
        >
          <div
            ref={designCanvasRef}
            style={{
              transform: "scale(0)",
              transformOrigin: "center bottom",
              transition: "transform 0.2s ease-out",
              overflow: "visible",
            }}
          >
            {children}
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden",
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <Image
            src={`/${theme}-wallpaper.png`}
            fill={true}
            alt="Wallpaper image"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </ThemeContext.Provider>
    );
  }
);

Environment.displayName = "Environment";

//  ///////////////////////////////////////////////////////////////////////////

export { Environment };
