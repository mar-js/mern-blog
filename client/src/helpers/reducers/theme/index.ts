import type { IAction, IInitialStateThemeMode } from "@/ts/interfaces";
import type { ColorMode } from "@/ts/types";

const THEME_MODE_CHANGE = "THEME_MODE_CHANGE";
const THEME_MODE_CHANGE_ICON = "THEME_MODE_CHANGE_ICON";

export const themeModeReducer = (
	state: IInitialStateThemeMode,
	action: IAction,
) => {
	const { type, payload } = action;

	if (type === THEME_MODE_CHANGE_ICON)
		return {
			...state,
			showDarkMode: payload,
		};

	if (type === THEME_MODE_CHANGE)
		return {
			...state,
			colorMode: payload,
		};

	return { ...state };
};

export const themeModeChangeIconAction = (theme: boolean) => ({
	type: THEME_MODE_CHANGE_ICON,
	payload: theme,
});

export const themeModeChangeAction = (theme: ColorMode) => ({
	type: THEME_MODE_CHANGE,
	payload: theme,
});

/*
export const signInParse = (initialState) => {
	const user = localStorage.getItem("user");

	if (user) {
		return parseJson(user);
	}

	return initialState;
};

function parseJson(json) {
	try {
		return JSON.parse(json);
	} catch (error) {
		console.log(error);
	}
}
*/
