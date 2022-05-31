import { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("black");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme , isLight: theme==="light"}}>
      {children}
    </ThemeContext.Provider>
  );
};
