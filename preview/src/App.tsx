import { useState, createContext } from "react";
import { Button, ButtonText } from "@uai-ui-react/button";
import "./App.css";
import ButtonSection from "./components/ButtonSection";
// import TopBarSection from "./components/TopBarSection";

export const AppContext = createContext({ showBorders: false });

function App() {
  const [showBorders, setShowBorders] = useState(true);

  const toggleBorders = () => {
    setShowBorders((prev) => !prev);
  };

  return (
    <>
      <div className="toggle-borders">
        <Button size="32" onClick={toggleBorders}>
          <ButtonText>Toggle Borders</ButtonText>
        </Button>
      </div>
      <div className="app">
        <AppContext.Provider value={{ showBorders }}>
          <ButtonSection />
          {/* <TopBarSection /> */}
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
