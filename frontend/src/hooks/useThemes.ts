import { useTheme, useThemeUpdate } from "../contexts/ThemeContext"

export const useThemes = () => {
  return {
    useTheme,
    useThemeUpdate
  }
}