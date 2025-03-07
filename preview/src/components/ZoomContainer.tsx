import React, { useEffect, useRef } from "react";

interface ZoomContainerProps {
  children: React.ReactNode;
  width?: number;
  aspectRatio?: string;
  xMarginPercentage?: number;
  yMarginPixels?: number;
}

const ZoomContainer: React.FC<ZoomContainerProps> = ({
  children,
  width = 1357.65,
  aspectRatio = "2/1",
  xMarginPercentage = 6.6666666667,
  yMarginPixels = 128,
}) => {
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
      designCanvasRef.current.style.scale = yScaleValue.toString();
    } else {
      designCanvasRef.current.style.scale = xScaleValue.toString();
    }
  };

  useEffect(() => {
    calculateAndApplyScale();
    window.addEventListener("resize", calculateAndApplyScale);

    return () => {
      window.removeEventListener("resize", calculateAndApplyScale);
    };
  }, [width, aspectRatio, xMarginPercentage, yMarginPixels]);

  return (
    <div
      className="zoom-container"
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
    >
      <div
        ref={designCanvasRef}
        className="design-canvas"
        style={{
          // position: "absolute",
          // top: "50%",
          // left: "50%",
          // transform: "translate(-50%, -50%)",
          transformOrigin: "center center",
          transition: "transform 0.2s ease",
          overflow: "visible",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ZoomContainer;
