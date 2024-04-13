import { ThemeModel } from "@/contexts";
import {
	themeModeChangeAction,
	themeModeChangeIconAction,
	themeModeReducer,
} from "@/helpers";
import type { IInitialStateThemeMode, IThemeModeModel } from "@/ts/interfaces";
import { type FC, type PropsWithChildren, useEffect, useReducer } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const initialState: IInitialStateThemeMode = {
		showDarkMode: false,
		colorMode: "light",
	};
	const [themeMode, themeModeDispatch] = useReducer(
		themeModeReducer,
		initialState,
	);
	const BODY = document.body;

	const handleToggleThemeMode = () => {
		BODY?.classList.remove(themeMode.colorMode);

		themeModeDispatch(
			themeModeChangeAction(themeMode.colorMode === "light" ? "dark" : "light"),
		);
		themeModeDispatch(themeModeChangeIconAction(!themeMode.showDarkMode));
	};

	useEffect(() => {
		BODY?.classList.add(themeMode.colorMode);
	}, [BODY, themeMode.colorMode]);

	const VALUE: IThemeModeModel = {
		themeMode,
		handleToggleThemeMode,
	};

	return <ThemeModel.Provider value={VALUE}>{children}</ThemeModel.Provider>;
};
