import { UsersModel } from "@/contexts";
import type { IUsersModel } from "@/contexts/users/interface";
import {
	userErrorAction,
	userLoadingAction,
	userReducer,
	userSuccessAction,
} from "@/helpers";
import type { FC, FormEvent, PropsWithChildren } from "react";
import { useEffect, useLayoutEffect, useReducer } from "react";
import { navigate } from "wouter/use-location";

export const UsersProvider: FC<PropsWithChildren> = ({ children }) => {
	const initialState = {
		loading: false,
		data: null,
		error: undefined,
		isLogged: false,
	};
	const [userState, userDispatch] = useReducer(userReducer, initialState);

	const handleSubmit = async (e: FormEvent, access) => {
		e.preventDefault();

		const TARGET = e.target as HTMLFormElement;
		const DATA = Object.fromEntries(new FormData(TARGET));

		userDispatch(userLoadingAction());

		const RESPONSE = await fetch(`/api/auth/${access}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(DATA),
		});

		const RESPONSE_DATA = await RESPONSE.json();

		if (RESPONSE.ok) {
			userDispatch(userSuccessAction(RESPONSE_DATA));

			return navigate(access === "signup" ? "/signin" : "/");
		}

		userDispatch(userErrorAction(RESPONSE_DATA));

		return navigate("/error");
	};

	useLayoutEffect(() => {
		const user = localStorage.getItem("user");

		if (user) {
			const USER = JSON.parse(user);

			userDispatch(userSuccessAction(USER));
		}
	}, []);

	useEffect(() => {
		if (userState.isLogged) {
			const { username, email } = userState.data.user;

			localStorage.setItem(
				"user",
				JSON.stringify({ user: { username, email } }),
			);
		}
	}, [userState.isLogged, userState.data]);

	const VALUE: IUsersModel = { userState, userDispatch, handleSubmit };

	return <UsersModel.Provider value={VALUE}>{children}</UsersModel.Provider>;
};
