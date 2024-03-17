import type { Dispatch, FormEvent } from "react";

export interface IUser {
	id: string;
	username: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

export interface IUserState {
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
	userState: IUserState;
	userDispatch: Dispatch<IAction>;
	handleSubmit: (e: FormEvent, access: string) => Promise<void>;
}
