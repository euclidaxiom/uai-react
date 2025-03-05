import { useContext } from "react";
import "./ComponentSection.css";
import { BordersContext } from "../App";

function ComponentSection({
  name,
  children,
}: {
  name: String;
  children: React.ReactNode;
}) {
  const { showBorders } = useContext(BordersContext);
  return (
    <section className="component-section">
      <h2 className="section-title h6">{name}</h2>
      <div
        className={`component-container ${showBorders ? "show-borders" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}

export default ComponentSection;
