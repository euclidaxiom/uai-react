import ZoomContainer from "../components/ZoomContainer";
import sequoiaWallpaper from "../public/macos-sequoia-wallpaper.png";
import TopBarPage from "./TopBarPage";

function TopBarPrototype() {
  return (
    <>
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
    </>
  );
}

export default TopBarPrototype;
