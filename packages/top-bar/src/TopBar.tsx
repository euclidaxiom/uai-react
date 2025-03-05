import React, { ReactNode, forwardRef, useContext } from "react";
import { Button, ButtonIcon } from "@uai-ui-react/button";
import { AppContext, LayoutContext } from "@uai-ui-react/app-context";

import "./TopBar.css";

//     |\|\
//    /nn /\______
//   (__)\        |\
//        || |--| | \_
//        || |  | |
//  ///////////////////////////////////////////////////////////////////////////

//  TOP BAR

interface TopBar extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const TopBar = forwardRef<HTMLDivElement, TopBar>(({ children }, ref) => {
  const showTitle = true;

  return (
    <div ref={ref} className="uai-Top-bar">
      <div className="leading">
        <Button size="32">
          <ButtonIcon>
            <span className="material-symbols-sharp">dock_to_right</span>
          </ButtonIcon>
        </Button>

        {/* <div>
          <Button size="32">
            <ButtonIcon>
              <span className="material-symbols-sharp">arrow_back_ios_new</span>
            </ButtonIcon>
          </Button>
          <Button size="32">
            <ButtonIcon>
              <span className="material-symbols-sharp">arrow_forward_ios</span>
            </ButtonIcon>
          </Button>
        </div> */}
      </div>
      <div className="center">{showTitle && <div>{children}</div>}</div>
      <div className="trailing"></div>
    </div>
  );
});

TopBar.displayName = "TopBar";

//  ///////////////////////////////////////////////////////////////////////////

export { TopBar };
