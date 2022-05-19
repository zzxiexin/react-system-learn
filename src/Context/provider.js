import React, { useState } from "react";
import { themes, ThemeContext } from "./constant";
import ChildComponent from "./consumer";
const Provider = () => {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
};

export default Provider;
