"use client";

import { TopBar } from "@uai-ui-react/top-bar";
import { useEffect, useRef, useState } from "react";

function TopBarPrototype() {
  const topBarRef = useRef<HTMLDivElement>(null);
  const contentAreaRef = useRef<HTMLDivElement>(null);
  const [topBarHeight, setTopBarHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTopBarHeight = () => {
      if (topBarRef.current) {
        setTopBarHeight(topBarRef.current.offsetHeight);
      }
    };

    // Initial measurement
    updateTopBarHeight();

    // Update on window resize
    window.addEventListener("resize", updateTopBarHeight);

    return () => {
      window.removeEventListener("resize", updateTopBarHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (contentAreaRef.current) {
        const scrollTop = contentAreaRef.current.scrollTop;
        setIsScrolled(scrollTop > 0);
      }
    };

    const contentArea = contentAreaRef.current;
    if (contentArea) {
      contentArea.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentArea) {
        contentArea.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="window">
      <div className="window-content">
        <div
          className={
            isScrolled ? "top-bar-container--on-scroll" : "top-bar-container"
          }
          ref={topBarRef}
        >
          <TopBar pageTitle="Title" />
        </div>
        <div
          className="content-area"
          style={{ paddingTop: `${topBarHeight}px` }}
          ref={contentAreaRef}
        >
          <p
            style={{
              width: "40.0000000002%",
              marginTop: "64px",
              color: "transparent",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
            massa, varius a, semper congue, euismod non, mi. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
            dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
            a, semper congue, euismod non, mi. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed non risus. Suspendisse lectus
            tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            Cras elementum ultrices diam. Maecenas ligula massa, varius a,
            semper congue, euismod non, mi. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed non risus. Suspendisse lectus
            tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            Cras elementum ultrices diam. Maecenas ligula massa, varius a,
            semper congue, euismod non, mi. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed non risus. Suspendisse lectus
            tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            Cras elementum ultrices diam. Maecenas ligula massa, varius a,
            semper congue, euismod non, mi. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed non risus. Suspendisse lectus
            tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            Cras elementum ultrices diam. Maecenas ligula massa, varius a,
            semper congue, euismod non, mi. Suspendisse lectus tortor, dignissim
            sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
            ultrices diam. Maecenas ligula massa, varius a, semper congue,
            euismod non, mi. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
            adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
            Maecenas ligula massa, varius a, semper congue, euismod non, mi.
          </p>
        </div>
      </div>
    </div>
  );
}

export { TopBarPrototype };
