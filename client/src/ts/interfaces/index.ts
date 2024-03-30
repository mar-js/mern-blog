import type { Dispatch, FormEvent, PropsWithChildren } from "react";
import type { Access } from "../types";

export interface IUser {
	id: string;
	username: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

export interface IUserState {
	loading: boolean;
	data: Partial<IUser>;
	error: undefined | string;
	isLogged: boolean;
}

export interface IAction {
	type: string;
	payload: Partial<IUser | boolean | { error: string }>;
}

export interface IHandleSubmitUser {
	e: FormEvent;
	access: Access;
	userDispatch: Dispatch<IAction>;
	id: string;
}

export interface IUsersModel {
	userState: IUserState;
	userDispatch: Dispatch<IAction>;
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
