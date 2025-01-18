import { useState, createContext } from "react";
import { Button, LabelText } from "./components/Button";
import "./App.css";
import ButtonSection from "./utils/ButtonSection";
import TopBarSection from "./utils/TopBarSection";

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
          <LabelText>Toggle Borders</LabelText>
        </Button>
      </div>
      <div className="app">
        <AppContext.Provider value={{ showBorders }}>
          <ButtonSection />
          <TopBarSection />
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
