import { CoolButton } from "../CoolButton/CoolButton"
import { useThemes } from "../../hooks/useThemes"
import './DarkThemeButton.css'

export const DarkThemeButton = () => {
  const { useTheme, useThemeUpdate } = useThemes();

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <div className="dark-box">Dark Theme is {darkTheme ? "on" : "off"}
        <CoolButton buttonText={"Click to toggle theme"} onClick={toggleTheme}></CoolButton>
    </div>
  )
}