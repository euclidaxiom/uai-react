import {
  createContext,
} from "react";

interface ThemeContext {
  theme: String;
}

const ThemeContext = createContext<ThemeContext>({
  theme: "none",
});

export { ThemeContext }
