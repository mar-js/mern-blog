import { ThemeModel } from "@/contexts";
import {
	themeModeChangeAction,
	themeModeChangeIconAction,
	themeModeReducer,
} from "@/helpers";
import { FC, PropsWithChildren, useEffect, useReducer } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const initialState = {
		showDarkMode: false,
		colorMode: "light",
	};
	const [themeMode, themeModeDispatch] = useReducer(
		themeModeReducer,
		initialState,
	);
	const BODY = document.body;

	console.log("AA", themeMode);

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

	const VALUE = {
		themeMode,
		handleToggleThemeMode,
	};

	return <ThemeModel.Provider value={VALUE}>{children}</ThemeModel.Provider>;
};
