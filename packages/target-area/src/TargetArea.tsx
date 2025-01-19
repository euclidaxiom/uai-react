import React, { ReactNode, forwardRef } from "react";

//     |\|\
//    /nn /\______
//   (__)\        |\
//        || |--| | \_
//        || |  | |
//  ///////////////////////////////////////////////////////////////////////////

//  TARGET AREA

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "44px",
  minWidth: "44px",
};

interface TargetArea extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const TargetArea = forwardRef<HTMLDivElement, TargetArea>(
  ({ children }, ref) => {
    return (
      <div ref={ref} style={style}>
        {children}
      </div>
    );
  }
);

TargetArea.displayName = "TargetArea";

//  ///////////////////////////////////////////////////////////////////////////

export { TargetArea };
