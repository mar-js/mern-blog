import { createEndpoint, createMethod } from "@/helpers";
import {
	userErrorAction,
	userLoadingAction,
	userSuccessAction,
} from "@/helpers/reducers";
import type { IHandlerSubmitUser } from "@/ts/interfaces";
import type { Access } from "@/ts/types";
import { navigate } from "wouter/use-location";

export const handlerSubmitUser = async ({
	e,
	userDispatch,
	id,
}: IHandlerSubmitUser): Promise<void> => {
	const access = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement)
		.id as Access;

	e.preventDefault();

	if (access === "delete") {
		const CONFIRM_DELETE = confirm("You're sure?");

		if (!CONFIRM_DELETE) return;
	}

	const TARGET = e.target as HTMLFormElement;
	const GET_DATA = Object.fromEntries(new FormData(TARGET));
	const DATA = Object.fromEntries(
		Object.entries(GET_DATA).filter(([_, v]) => v !== ""),
	);

	if (access !== "delete" && !Object.entries(DATA).length) {
		alert("You must load even if it is data to edit");

		return;
	}

	const ENDPOINT = createEndpoint(access, id);
	const METHOD = createMethod(access);

	userDispatch(userLoadingAction());

	try {
		const RESPONSE = await fetch(`/api/${ENDPOINT}`, {
			method: METHOD,
			headers: {
				"Content-Type": "application/json",
			},
			...(access === "delete" ? {} : { body: JSON.stringify(DATA) }),
		});
		const { user } = await RESPONSE.json();

		if (RESPONSE.ok) {
			userDispatch(userSuccessAction(METHOD === "DELETE" ? null : { ...user }));

			return navigate("/");
		}

		throw "ERROR CLIENT";
	} catch (error) {
		userDispatch(userErrorAction({ error: error as string }));
		userDispatch(userSuccessAction(null));

		return navigate("/error");
	}
};
