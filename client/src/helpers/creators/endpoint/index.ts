import { Access } from "@/ts/types";

export const createEndpoint = (access: Access, id: string): string => {
	let endpoint = "";

	if (access === "signin" || access === "signup") {
		endpoint = `/auth/${access}`;
	} else {
		endpoint = `/users/${access}/${id}`;
	}

	return endpoint;
};
