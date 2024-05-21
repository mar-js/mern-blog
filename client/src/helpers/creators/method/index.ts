import type { Access, Method } from "@/ts/types";

export const createMethod = (access: Access): Method => {
	let method = "" as Method;

	if (access === "signin" || access === "signup" || access === "signout") {
		method = "POST";
	} else if (access === "update") {
		method = "PUT";
	} else {
		method = "DELETE";
	}

	return method;
};
