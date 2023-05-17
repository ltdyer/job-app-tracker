import React, { ReactNode, useState, useContext } from "react";

const ThemeContext = React.createContext(false);
const ThemeUpdateContext = React.createContext(() => {});

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
}

interface Props {
  children: ReactNode
}
export const ThemeProvider = ({ children }: Props) => {

  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )

}