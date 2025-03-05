import { useState, createContext } from "react";

import { Button, ButtonText } from "@uai-ui-react/button";
import { AppContextProvider } from "@uai-ui-react/app-context";
import ButtonSection from "./components/ButtonSection";
import TopBarSection from "./components/TopBarSection";

import "./App.css";

export const BordersContext = createContext({ showBorders: false });

function App() {
  const [showBorders, setShowBorders] = useState(true);
  const os = undefined;

  const toggleBorders = () => {
    setShowBorders((prev) => !prev);
  };

  return (
    <>
      <AppContextProvider>
        <div className="toggle-borders">
          <Button size="32" onClick={toggleBorders}>
            <ButtonText>Toggle Borders</ButtonText>
          </Button>
        </div>
        <div className="app">
          <BordersContext.Provider value={{ showBorders }}>
            <ButtonSection />
            <TopBarSection />
          </BordersContext.Provider>
        </div>
      </AppContextProvider>
    </>
  );
}

export default App;
