import type { Access, Method } from "@/ts/types";

export const createMethod = (access: Access): Method | string => {
	let method = "";

	if (
		access === "signin" ||
		access === "signup" ||
		access === "signout" ||
		access === "create-post"
	) {
		method = "POST";
	} else if (access === "update") {
		method = "PUT";
	} else if (access === "delete") {
		method = "DELETE";
	} else {
		method = "";
	}

	return method;
};
