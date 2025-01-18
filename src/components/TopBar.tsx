import { createContext } from "react";
import { Button, LabelIcon } from "./Button";
import "./TopBar.css";

interface TopBarProps {
  title: string;
}

export const AppContext = createContext({ showBorders: false });

function TopBar({ title }: TopBarProps) {
  const inWeb = false;
  return (
    <div className="top-bar">
      <div className="container--1">
        <div className="container--2">
          {inWeb ? (
            <div></div>
          ) : (
            <div>
              <Button size="32" onClick={() => {}}>
                <LabelIcon>arrow_back_ios_new</LabelIcon>
              </Button>
              <Button size="32" onClick={() => {}}>
                <LabelIcon>arrow_forward_ios</LabelIcon>
              </Button>
            </div>
          )}
          <h1>{title}</h1>
        </div>
        <div className="container--2"></div>
      </div>
      <div className="container--1">
        <div className="container--2"></div>
      </div>
    </div>
  );
}

export default TopBar;
