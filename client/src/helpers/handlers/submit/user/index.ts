import { createEndpoint, createMethod } from "@/helpers";
import {
	userErrorAction,
	userLoadingAction,
	userSuccessAction,
} from "@/helpers/reducers";
import { navigate } from "wouter/use-location";

export const handlerSubmitUser = async ({
	e,
	access,
	userDispatch,
	id,
}: IHandleSubmitUser) => {
	e.preventDefault();

	const TARGET = e.target as HTMLFormElement;
	const GET_DATA = Object.fromEntries(new FormData(TARGET));
	const DATA = Object.fromEntries(
		Object.entries(GET_DATA).filter(([_, v]) => v !== ""),
	);

	const ENDPOINT = createEndpoint(access, id);
	const METHOD = createMethod(access);

	userDispatch(userLoadingAction());

	try {
		const RESPONSE = await fetch(`/api/${ENDPOINT}`, {
			method: METHOD,
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
