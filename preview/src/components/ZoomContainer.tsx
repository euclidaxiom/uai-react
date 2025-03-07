import React, { useEffect, useRef } from 'react';

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
  aspectRatio = '2/1',
  xMarginPercentage = 6.6666666667,
  yMarginPixels = 128,
}) => {
  const designCanvasRef = useRef<HTMLDivElement>(null);

  const calculateAndApplyScale = () => {
    if (!designCanvasRef.current) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const height = width / 2; // Based on the 2/1 aspect ratio

    const xMargin = (xMarginPercentage / 100) * 2;
    const yMargin = yMarginPixels * 2;

    const xRenderSize = viewportWidth - viewportWidth * xMargin;
    const yRenderSize = viewportHeight - yMargin;

    const xScaleValue = xRenderSize / width;
    const yScaleValue = yRenderSize / height;

    designCanvasRef.current.style.width = `${width}px`;

    if (height * xScaleValue > yRenderSize) {
      designCanvasRef.current.style.scale = yScaleValue.toString();
    } else {
      designCanvasRef.current.style.scale = xScaleValue.toString();
    }
  };

  useEffect(() => {
    calculateAndApplyScale();
    window.addEventListener('resize', calculateAndApplyScale);

    return () => {
      window.removeEventListener('resize', calculateAndApplyScale);
    };
  }, [width, aspectRatio, xMarginPercentage, yMarginPixels]);

  return (
    <div
      className="zoom-container"
      style={{
        position: 'relative',
        overflow: 'auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        ref={designCanvasRef}
        className="design-canvas"
        style={{
          width: '0px',
          aspectRatio,
          backgroundColor: 'black',
          transformOrigin: 'center center',
          transition: 'transform 0.2s ease',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ZoomContainer;