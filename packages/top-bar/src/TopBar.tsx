"use client";

import React, { forwardRef, useContext } from "react";
import { Button, ButtonIcon, ButtonContext } from "@uai-ui-react/button";
import { ThemeContext } from "@uai-ui-react/app-context";

import "./TopBar.css";

//     |\|\
//    /nn /\______
//   (__)\        |\
//        || |--| | \_
//        || |  | |
//  ///////////////////////////////////////////////////////////////////////////

//  TOP BAR

interface TopBar extends React.HTMLAttributes<HTMLDivElement> {
  pageTitle: string;
  showTitle?: boolean;
}

const TopBar = forwardRef<HTMLDivElement, TopBar>(
  ({ pageTitle, showTitle = true }, ref) => {
    const { defaultIcons } = useContext(ThemeContext);

    return (
      <div ref={ref} className="top-bar">
        <ButtonContext.Provider value={{ size: "32", variant: "plan" }}>
          <div className="leading">
            <Button>
              <ButtonIcon>{defaultIcons.leftBar}</ButtonIcon>
            </Button>

            <div className="button-group--32">
              <Button>
                <ButtonIcon>{defaultIcons.chevronBack}</ButtonIcon>
              </Button>
              <Button>
                <ButtonIcon>{defaultIcons.chevronForward}</ButtonIcon>
              </Button>
            </div>
          </div>
        </ButtonContext.Provider>
        {showTitle && <div className="center">{pageTitle}</div>}
        <div className="trailing"></div>
      </div>
    );
  }
);

TopBar.displayName = "TopBar";

//  ///////////////////////////////////////////////////////////////////////////

export { TopBar };
