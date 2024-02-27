import { createContext, useContext } from "react";

export const ThemeModel = createContext({});
export const useThemeContext = () => useContext(ThemeModel);
