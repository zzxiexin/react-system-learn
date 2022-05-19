import React from "react";
const themes = {
  light: {
    background: "#fff",
    color: "#000"
  },
  dark: {
    background: "#000",
    color: "#fff"
  }
};
const toggleTheme = () => {};
const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme
});
export { themes, ThemeContext };
