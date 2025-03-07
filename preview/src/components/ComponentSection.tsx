import { useContext } from "react";
import "./ComponentSection.css";
import { BordersContext } from "../App";
import { Link } from "react-router-dom";

function ComponentSection({
  name,
  link,
  children,
}: {
  name: String;
  link: String;
  children: React.ReactNode;
}) {
  const { showBorders } = useContext(BordersContext);
  return (
    <section className="component-section">
      <Link to={link}>
        <h2 className="section-title h6">{name}</h2>
      </Link>
      <div
        className={`component-container ${showBorders ? "show-borders" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}

export default ComponentSection;
