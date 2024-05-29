import type {
	ChangeEvent,
	Dispatch,
	FormEvent,
	MouseEvent,
	MutableRefObject,
	PropsWithChildren,
} from "react";
import type { Access, ColorMode, Sign } from "../types";

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

export interface IIntroductionSign {
	sign: Sign;
}

export interface IUseTextarea {
	textareaRef: MutableRefObject<HTMLTextAreaElement | null>;
	styles: {
		size: number;
		uppercase: boolean;
		color: string;
	};
	handlerSize: (e: ChangeEvent<HTMLInputElement>) => void;
	handlerFontWeight: (e: MouseEvent<HTMLButtonElement>) => void;
	handlerAlign: (e: MouseEvent<HTMLButtonElement>) => void;
	handlerTextTransform: () => void;
	handlerColor: (e: FormEvent<HTMLInputElement>) => void;
}

export interface IUseDetectMobileView {
	detectMobileView: boolean;
}
