import type { Dispatch, FormEvent } from "react";

export interface IData {
	user: {
		id: string;
		username: string;
		email: string;
		createdAt: string;
		updatedAt: string;
	};
	message: string;
}

export interface IUserState {
	loading: boolean;
	data: IData | null;
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
