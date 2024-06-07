import { convertToBase64, createEndpoint, createMethod } from "@/helpers";
import {
	postsErrorAction,
	postsLoadingAction,
	postsSuccessAction,
} from "@/helpers/reducers";
import type { IHandlerSubmitPosts } from "@/ts/interfaces";
import type { Access } from "@/ts/types";
import { navigate } from "wouter/use-location";

export const handlerSubmitPosts = async ({
	e,
	postsDispatch,
}: IHandlerSubmitPosts): Promise<void> => {
	const access = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement)
		.id as Access;

	e.preventDefault();

	const TARGET = e.target as HTMLFormElement;
	const GET_DATA = Object.fromEntries(new FormData(TARGET));
	let data = Object.fromEntries(
		Object.entries(GET_DATA).filter(([_, v]) => v !== ""),
	);

	console.log(data.file);
	return;
	data = {
		...data,
		file: await convertToBase64(data.file),
	};

	const ENDPOINT = createEndpoint(access);
	const METHOD = createMethod(access);

	postsDispatch(postsLoadingAction());

	try {
		const RESPONSE = await fetch(`/api/${ENDPOINT}`, {
			method: METHOD,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const { post } = await RESPONSE.json();

		if (RESPONSE.ok) {
			postsDispatch(postsSuccessAction({ ...post }));

			return navigate(`/posts/${post.slug}`);
		}

		throw "ERROR POSTS";
	} catch (error) {
		postsDispatch(postsErrorAction({ error: error as string }));
		postsDispatch(postsSuccessAction(null));

		return navigate("/error");
	}
};
