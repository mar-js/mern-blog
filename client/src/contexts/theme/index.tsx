import type { IThemeModeModel } from "@/ts/interfaces";
import { createContext, useContext } from "react";

export const ThemeModel = createContext({} as IThemeModeModel);
export const useThemeContext = () => useContext(ThemeModel);
