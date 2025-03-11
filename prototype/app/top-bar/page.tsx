"use client";

import { useState } from "react";
import { Environment } from "@/components/Environment";
import { TopBarPrototype } from "@/components/TopBarPrototype";
import { Button, ButtonIcon } from "@uai-ui-react/button";
import { Apple, Glasses, Grid2x2 } from "lucide-react";

export default function Page() {
  const [theme, setTheme] = useState<"macos" | "visionos" | "windows">("macos");

  return (
    <>
      <div style={{ position: "fixed", top: "0", left: "0", zIndex: "999" }}>
        <div style={{ margin: "16px 16px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "16px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <span style={{ marginRight: "16px", fontSize: "13px" }}>
              Chose a theme:
            </span>
            <Button onClick={() => setTheme("macos")}>
              <ButtonIcon>
                <Apple />
              </ButtonIcon>
            </Button>
            <Button onClick={() => setTheme("windows")}>
              <ButtonIcon>
                <Grid2x2 />
              </ButtonIcon>
            </Button>
            <Button onClick={() => setTheme("visionos")}>
              <ButtonIcon>
                <Glasses />
              </ButtonIcon>
            </Button>
          </div>
        </div>
      </div>
      <Environment theme={theme}>
        <TopBarPrototype />
      </Environment>
    </>
  );
}
