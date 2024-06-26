import type { Access } from "@/ts/types";

export const createEndpoint = (access: Access, id?: string): string => {
	let endpoint = "";

	if (access === "signin" || access === "signup" || access === "signout") {
		endpoint = `auth/${access}`;
	} else if (access === "create-post") {
		endpoint = `posts/${access}`;
	} else {
		endpoint = `users/${access}/${id}`;
	}

	return endpoint;
};
