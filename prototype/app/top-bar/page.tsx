"use client";

import { useState } from "react";
import { Environment } from "@/components/Environment";
import { TopBarPrototype } from "@/components/TopBarPrototype";

export default function Page() {
  const [theme, setTheme] = useState<"macos" | "visionos" | "windows">("macos");

  return (
    <>
      <div style={{ position: "fixed", top: "0", left: "0", zIndex: "999" }}>
        <div style={{ margin: "16px 16px" }}>
          <div
            style={{
              display: "inline-flex",
              borderRadius: "6px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
            }}
          >
            <button
              type="button"
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: "500",
                borderTopLeftRadius: "6px",
                borderBottomLeftRadius: "6px",
                backgroundColor: theme === "macos" ? "#0066ff" : "white",
                color: theme === "macos" ? "white" : "#333",
                border: theme === "macos" ? "none" : "1px solid #ddd",
                cursor: "pointer",
              }}
              onClick={() => setTheme("macos")}
            >
              macOS
            </button>
            <button
              type="button"
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: "500",
                backgroundColor: theme === "visionos" ? "#0066ff" : "white",
                color: theme === "visionos" ? "white" : "#333",
                border: theme === "visionos" ? "none" : "1px solid #ddd",
                cursor: "pointer",
              }}
              onClick={() => setTheme("visionos")}
            >
              visionOS
            </button>
            <button
              type="button"
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: "500",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
                backgroundColor: theme === "windows" ? "#0066ff" : "white",
                color: theme === "windows" ? "white" : "#333",
                border: theme === "windows" ? "none" : "1px solid #ddd",
                cursor: "pointer",
              }}
              onClick={() => setTheme("windows")}
            >
              Windows
            </button>
          </div>
        </div>
      </div>
      <Environment theme={theme}>
        <TopBarPrototype />
      </Environment>
    </>
  );
}
