"use client";

import React, { forwardRef, useEffect, useRef } from "react";
import { ThemeContext } from "@uai-ui-react/app-context";
import Image from "next/image";
import "@uai-ui-react/prototype-themes";
import { defaultIcons } from "./DefaultIcons";
import "./Environment.css";

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
}

const Environment = forwardRef<HTMLDivElement, Environment>(
  ({ children, theme }, ref) => {
    const windowRef = useRef<HTMLDivElement>(null);

    const windowWidth = 1357.65;
    const windowAspectRatio = 2;
    const pageMargin = 13.3333333334;

    const desktopDisplayAspectRatio = 1.7730711044;
    const desktopDisplayBezel = 104.4368600683;
    const desktopDisplayTop = 2.7689030884;
    const desktopDisplayWidth = 2448;
    const desktopDisplayHeight = 1878;

    const calculateAndApplyScale = () => {
      if (!windowRef.current) return;

      const viewportWidth = window.innerWidth;

      const pageWidth = (): number => {
        if (viewportWidth > 2000) {
          return 2000;
        }
        return viewportWidth;
      };

      const xMargin = (pageMargin / 100) * 3;

      const xRenderSize = pageWidth() - pageWidth() * xMargin;

      const scaleValue = xRenderSize / windowWidth;

      windowRef.current.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
    };

    useEffect(() => {
      const initialTimer = setTimeout(() => {
        calculateAndApplyScale();
      }, 1000);

      window.addEventListener("resize", calculateAndApplyScale);

      return () => {
        clearTimeout(initialTimer);
        window.removeEventListener("resize", calculateAndApplyScale);
      };
    }, [pageMargin, windowWidth]);

    return (
      <ThemeContext.Provider
        value={{ theme: `${theme}`, defaultIcons: defaultIcons }}
      >
        <div className="page" style={{ padding: `${pageMargin}%` }}>
          <div
            className={`device theme--${theme}`}
            style={{
              width: "100%",
              aspectRatio: `${desktopDisplayAspectRatio}/1`,
            }}
          >
            <div className="screen">
              <div
                ref={windowRef}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(0)",
                  width: `${windowWidth}px`,
                  aspectRatio: `${windowAspectRatio}/1`,
                  transformOrigin: "center center",
                  transition: "transform 0.2s ease-out",
                  overflow: "visible",
                  zIndex: 3,
                }}
              >
                {children}
              </div>
              <Image
                src={`/macos-wallpaper.png`}
                fill={true}
                alt="Wallpaper image"
                style={{
                  objectFit: "cover",
                  zIndex: 2,
                  opacity: `${theme === "macos" ? 1 : 0}`,
                }}
              />
              <Image
                src={`/windows-wallpaper.png`}
                fill={true}
                alt="Wallpaper image"
                style={{
                  objectFit: "cover",
                  zIndex: 2,
                  opacity: `${theme === "windows" ? 1 : 0}`,
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                width: `${desktopDisplayBezel}%`,
                transform: `translate(-50%, -${desktopDisplayTop}%)`,
                opacity: `${theme === "visionos" ? 0 : 1}`,
              }}
            >
              <Image
                src={`/desktop-display.png`}
                width={desktopDisplayWidth}
                height={desktopDisplayHeight}
                alt="Device display"
                style={{
                  width: "100%",
                  opacity: `${
                    theme === "macos" ? 1 : theme === "windows" ? 1 : 0
                  }`,
                }}
              />
            </div>
          </div>
          <Image
            src="/space-environment.png"
            fill={true}
            alt="Wallpaper image"
            style={{
              objectFit: "cover",
              zIndex: -1,
              opacity: `${theme === "visionos" ? 1 : 0}`,
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
