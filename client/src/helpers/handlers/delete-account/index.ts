import {
	userErrorAction,
	userLoadingAction,
	userSuccessAction,
} from "@/helpers/reducers";
import { navigate } from "wouter/use-location";

export const handlerDeleteAccount = async ({ userDispatch, id }) => {
	const CONFIRM_DELETE = confirm("You're sure?");

	if (!CONFIRM_DELETE) return;

	userDispatch(userLoadingAction());

	try {
		const RESPONSE = await fetch(`/api//users/delete/${id}`, {
			method: "DELETE",
		});

		if (RESPONSE.ok) {
			userDispatch(userSuccessAction(null));

			return navigate("/");
		}

		throw "ERROR CLIENT";
	} catch (error) {
		userDispatch(userErrorAction({ error: error as string }));
		userDispatch(userSuccessAction(null));

		return navigate("/error");
	}
};
