import type { Dispatch, FormEvent, PropsWithChildren } from "react";
import type { Access, ColorMode } from "../types";

export interface IUser {
	id: string;
	username: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

export interface IInitialUserState {
	loading: boolean;
	data: IUser;
	error: undefined | string;
	isLogged: boolean;
}

export interface IUserAction {
	type: string;
	payload: IUser | null | { error: string };
}

export interface IThemeModeAction {
	type: string;
	payload: boolean | ColorMode;
}

export interface IHandleSubmitUser {
	e: FormEvent;
	access: Access;
	userDispatch: Dispatch<IUserAction>;
	id: string;
}

export interface IUsersModel {
	userState: IInitialUserState;
	userDispatch: Dispatch<IUserAction>;
	handleSubmitUser: ({
		access,
		e,
		id,
		userDispatch,
	}: IHandleSubmitUser) => Promise<void>;
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
