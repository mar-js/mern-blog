import { UsersModel } from "@/contexts";
import type { IUserState, IUsersModel } from "@/contexts/users/interface";
import {
	userErrorAction,
	userLoadingAction,
	userReducer,
	userSuccessAction,
} from "@/helpers";
import type { FC, FormEvent, PropsWithChildren } from "react";
import { useEffect, useReducer } from "react";
import { navigate } from "wouter/use-location";

export const UsersProvider: FC<PropsWithChildren> = ({ children }) => {
	const initialState: IUserState = {
		loading: false,
		data: null,
		error: undefined,
		isLogged: false,
	};
	const [userState, userDispatch] = useReducer(userReducer, initialState);
	const USER_STORAGE = localStorage.getItem("user");
	const USER = USER_STORAGE && JSON.parse(USER_STORAGE);
	const ID = USER?.id || userState.data?.id || "";

	const handleSubmit = async (e: FormEvent, access: string) => {
		e.preventDefault();

		const TARGET = e.target as HTMLFormElement;
		const GET_DATA = Object.fromEntries(new FormData(TARGET));
		const DATA =
			access === "update"
				? Object.fromEntries(
						Object.entries(GET_DATA).filter(([_, v]) => v !== ""),
					)
				: GET_DATA;
		const ENDPOINT =
			ID && access === "update" ? `users/update/${ID}` : `auth/${access}`;

		userDispatch(userLoadingAction());

		try {
			const RESPONSE = await fetch(`/api/${ENDPOINT}`, {
				method: access === "update" ? "PUT" : "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(DATA),
			});

			const { user } = await RESPONSE.json();

			if (RESPONSE.ok) {
				userDispatch(userSuccessAction({ ...user }));

				return navigate(access === "signup" ? "/signin" : "/");
			}

			throw "ERROR CLIENT";
		} catch (error) {
			userDispatch(userErrorAction({ error: error as string }));
			userDispatch(userSuccessAction(null));

			return navigate("/error");
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (USER) userDispatch(userSuccessAction(USER));
	}, []);

	console.log("AAA userState ", userState);

	const VALUE: IUsersModel = { userState, userDispatch, handleSubmit };

	return <UsersModel.Provider value={VALUE}>{children}</UsersModel.Provider>;
};
