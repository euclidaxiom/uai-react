import { ThemeContext } from "../components/ThemeContext";
import ZoomContainer from "../components/ZoomContainer";
import sequoiaWallpaper from "../public/macos-sequoia-wallpaper.png";
import TopBarPage from "./TopBarPage";
import "../themes/MacOS.css";

function TopBarPrototype() {
  return (
    <ThemeContext.Provider value={{ theme: "macos" }}>
      <ZoomContainer>
        <TopBarPage />
      </ZoomContainer>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${sequoiaWallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
    </ThemeContext.Provider>
  );
}

export default TopBarPrototype;
