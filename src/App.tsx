import { useState, createContext } from "react";
import { Button, LabelText } from "./components/Button";
import "./App.css";
import ButtonSection from "./utils/ButtonSection";
import TopBarSection from "./utils/TopBarSection";
import ParagraphSection from "./utils/ParagraphSection";
import {
  Header1Section,
  Header2Section,
  Header3Section,
  Header4Section,
  Header5Section,
  Header6Section,
} from "./utils/HeaderSection";
import { DashedListSection, NumberedListSection } from "./utils/ListSection";
import { TextMarkupSection } from "./utils/TextMarkupSection";

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
          <Header1Section />
          <Header2Section />
          <Header3Section />
          <Header4Section />
          <Header5Section />
          <Header6Section />
          <ParagraphSection />
          <TextMarkupSection />
          <DashedListSection />
          <NumberedListSection />
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
