import type { Dispatch, FormEvent, PropsWithChildren } from "react";
import type { Access, ColorMode } from "../types";

export interface IUser {
	id: string;
	username: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	isAdmin: boolean;
}

export interface IInitialUserState {
	loading: boolean;
	data: IUser | null;
	error: undefined | string;
	isLogged: boolean;
}

export interface IAction {
	type: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	payload: any;
}

export interface IUsersModel {
	userState: IInitialUserState;
	userDispatch: Dispatch<IAction>;
	id: string;
}

export interface ILayout extends PropsWithChildren {
	className?: string;
}

export interface ILinks {
	id: string;
	text: string;
	link: string;
}

export interface IInitialStateThemeMode {
	showDarkMode: boolean;
	colorMode: ColorMode;
}

export interface IThemeModeModel {
	themeMode: IInitialStateThemeMode;
	handleToggleThemeMode: () => void;
}

export interface IAccess {
	access: Access;
}

export interface IHandlerSubmitUser {
	e: FormEvent<HTMLFormElement>;
	userDispatch: Dispatch<IAction>;
	id: string;
}

export interface IBtnAction {
	access: Access;
	className?: string;
}
